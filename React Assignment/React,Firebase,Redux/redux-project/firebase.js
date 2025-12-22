import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6Lp3F4zph5rwxzbSbsc1z4wIjXEMLbt4",
  authDomain: "metube-daa68.firebaseapp.com",
  projectId: "metube-daa68",
  storageBucket: "metube-daa68.firebasestorage.app",
  messagingSenderId: "1011967380460",
  appId: "1:1011967380460:web:c926eb8c0bd2eadacbcec9",
  measurementId: "G-X745ZHCWPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}   