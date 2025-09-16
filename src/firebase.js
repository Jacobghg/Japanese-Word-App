// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuKqTmKU5gnDhUFSCr2x1VQZQaSPai5X4",
  authDomain: "japanese-vocab-app-24ea8.firebaseapp.com",
  projectId: "japanese-vocab-app-24ea8",
  storageBucket: "japanese-vocab-app-24ea8.firebasestorage.app",
  messagingSenderId: "384157836809",
  appId: "1:384157836809:web:408ed6f11b94c28ee6fad8",
  measurementId: "G-MGCXCZBTFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);