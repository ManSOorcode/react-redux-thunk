// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
// const analytics = getAnalytics(app);
const auth = getAuth();

export { app, auth };
