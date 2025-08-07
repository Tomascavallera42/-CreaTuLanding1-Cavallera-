// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN3QQhNPDd93wky9-zHwPa_gAde7hzArw",
  authDomain: "ecomerce-omega.firebaseapp.com",
  projectId: "ecomerce-omega",
  storageBucket: "ecomerce-omega.firebasestorage.app",
  messagingSenderId: "110997955546",
  appId: "1:110997955546:web:5be216b2ecbd7a657316e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db =getFirestore();

export default db;