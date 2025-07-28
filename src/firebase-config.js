import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASzxywAxOR4kjobUaRXr0b0Lsf-03rjjY",
  authDomain: "baralink-7caa4.firebaseapp.com",
  projectId: "baralink-7caa4",
  storageBucket: "baralink-7caa4.appspot.com",
  messagingSenderId: "740624275894",
  appId: "1:740624275894:web:7fd8b5e942412cba484917"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
