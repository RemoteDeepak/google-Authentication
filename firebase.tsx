// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdJvoodBdQDxDMXVkQTtgF_QC6u2IG1jI",
  authDomain: "trymyauth.firebaseapp.com",
  projectId: "trymyauth",
  storageBucket: "trymyauth.firebasestorage.app",
  messagingSenderId: "816566078815",
  appId: "1:816566078815:web:5fd182c1576bf1418a3aea",
  measurementId: "G-6TSS7C2TEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);