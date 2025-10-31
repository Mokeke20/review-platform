// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDq83AaUihLsD_RjHEKXc9UE3ku9AoVwiY",
  authDomain: "review-platform-2025.firebaseapp.com",
  projectId: "review-platform-2025",
  storageBucket: "review-platform-2025.firebasestorage.app",
  messagingSenderId: "832006668725",
  appId: "1:832006668725:web:409122c43ffa283b0559fc"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);