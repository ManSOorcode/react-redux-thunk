// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8rp1fUsx_kblVCHlZpt5_OSGRfNliQfk",
  authDomain: "mansoor-contact-app.firebaseapp.com",
  databaseURL: "https://mansoor-contact-app-default-rtdb.firebaseio.com",
  projectId: "mansoor-contact-app",
  storageBucket: "mansoor-contact-app.appspot.com",
  messagingSenderId: "587467632462",
  appId: "1:587467632462:web:5e1111010d899ff91db81f",
  measurementId: "G-HFMMKZSR5K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
