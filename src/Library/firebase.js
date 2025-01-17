// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4xQTLQNe6ksu0i1dqgb8WDuQk9H1YaBI",
  authDomain: "horizone-be7a0.firebaseapp.com",
  projectId: "horizone-be7a0",
  storageBucket: "horizone-be7a0.firebasestorage.app",
  messagingSenderId: "850535960676",
  appId: "1:850535960676:web:55b7462290431c76268f71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}