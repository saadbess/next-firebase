import Link from "next/link";

// Top Navbar
export default function Navbar({}) {
  const user = true;
  const username = true;

  return (
    <nav className="w-full bg-gray-200 p-4">
      <ul className="flex items-center">
        <li className="mr-auto">
          <Link href="/">
            <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              FEED
            </button>
          </Link>
        </li>

        {/* user is signed-in and has username */}
        {username && (
          <>
            <li>
              <Link href="/admin">
                <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-4">
                  Write Posts
                </button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img
                  className="rounded-full bg-gray-300 w-12 h-12"
                  src={user?.photoURL}
                />
              </Link>
            </li>
          </>
        )}

        {/* user is not signed-in OR has not created a username  */}
        {!username && (
          <li>
            <Link href="/enter">
              <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                Log in
              </button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
