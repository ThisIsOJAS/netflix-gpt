// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDnJFG3popyzTpJAMI393w9WNIxqy3ROI",
  authDomain: "netflixgpt-5232b.firebaseapp.com",
  projectId: "netflixgpt-5232b",
  storageBucket: "netflixgpt-5232b.firebasestorage.app",
  messagingSenderId: "341140244461",
  appId: "1:341140244461:web:8eba72df6f87834d24c9e4",
  measurementId: "G-GYZXB4VZCK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
