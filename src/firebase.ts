import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB3OcvPzwzS7pGvBxdj4ViZY99h6kux9no",
  authDomain: "rise-c0c6d.firebaseapp.com",
  projectId: "rise-c0c6d",
  storageBucket: "rise-c0c6d.appspot.com",
  messagingSenderId: "879241046763",
  appId: "1:879241046763:web:c5f9ec312d31d93d0bacae",
  measurementId: "G-QVY9H2KW29",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
