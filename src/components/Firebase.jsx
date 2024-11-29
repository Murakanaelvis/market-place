// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA0Lvud6fXkRmuBySEDt5oZz9Ucoryl0OM",
    authDomain: "market-place-997a9.firebaseapp.com",
    projectId: "market-place-997a9",
    storageBucket: "market-place-997a9.firebasestorage.app",
    messagingSenderId: "1076027274357",
    appId: "1:1076027274357:web:c450c58c0f20f4f7f0343c",
    measurementId: "G-XHB3E2C5QL"
  };

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;


