// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Firebase configuration object you get from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBdY27hTfvIReCGI-pASC9i8C8_XnUb3mg",
  authDomain: "strat-aa0ed.firebaseapp.com",
  projectId: "strat-aa0ed",
  storageBucket: "strat-aa0ed.appspot.com",
  messagingSenderId: "299963766842",
  appId: "1:299963766842:web:8cbb52e44a4103a9d8fd03",
  measurementId: "G-8HRMD90BLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, addDoc, collection };
