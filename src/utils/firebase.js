// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDePx-z6IjJ03jp3g7F9x_TMkKMNST6lF4",
  authDomain: "netflixgpt-641b0.firebaseapp.com",
  projectId: "netflixgpt-641b0",
  storageBucket: "netflixgpt-641b0.appspot.com",
  messagingSenderId: "917128457582",
  appId: "1:917128457582:web:64ffb908a4aeadcc6f657f",
  measurementId: "G-0M2V5HBNED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()

