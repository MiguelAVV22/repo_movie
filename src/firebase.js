import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {  getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCo6JHxrOEQM5G7UII8FgmGNCAXEc4jR2Q",
  authDomain: "movies-58f3b.firebaseapp.com",
  projectId: "movies-58f3b",
  storageBucket: "movies-58f3b.firebasestorage.app",
  messagingSenderId: "384523549145",
  appId: "1:384523549145:web:3657c034717b80806081c8"
};

const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider= new GoogleAuthProvider()
const db= getFirestore(app)
export {auth, provider, signInWithPopup, db}