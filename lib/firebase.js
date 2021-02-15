import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBA0F6J0SxhDle3oBqONJAS25wtCPjE6LE",
  authDomain: "nextfire-43c41.firebaseapp.com",
  projectId: "nextfire-43c41",
  storageBucket: "nextfire-43c41.appspot.com",
  messagingSenderId: "710351212391",
  appId: "1:710351212391:web:fbf0c2d2c208a7adb4e9c2",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
