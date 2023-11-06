// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHjPi36JAv0Z1rvIM8o4b8hPQ6IH-ZpFY",
  authDomain: "kabar-kampus.firebaseapp.com",
  databaseURL: "https://kabar-kampus-default-rtdb.firebaseio.com",
  projectId: "kabar-kampus",
  storageBucket: "kabar-kampus.appspot.com",
  messagingSenderId: "236082342921",
  appId: "1:236082342921:web:5c1a00616ee97fbbe95cd8",
  measurementId: "G-HDBNHME7RW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
