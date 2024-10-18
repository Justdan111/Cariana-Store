// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"



// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDIOXnwI1ntBbmwYrYol_vPQ-4wABNowqI",
  authDomain: "slime-60fe8.firebaseapp.com",
  projectId: "slime-60fe8",
  storageBucket: "slime-60fe8.appspot.com",
  messagingSenderId: "239647120195",
  appId: "1:239647120195:web:2a85c926ad9a4bcdf32df6",
  measurementId: "G-KN6NBSYGX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export { app, auth, };
