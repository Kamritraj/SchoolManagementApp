// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_vjtzSblSLdGR_8uxg2wfERu85PZ8-U4",
  authDomain: "mern-schoolmanagementapp.firebaseapp.com",
  projectId: "mern-schoolmanagementapp",
  storageBucket: "mern-schoolmanagementapp.firebasestorage.app",
  messagingSenderId: "134375597943",
  appId: "1:134375597943:web:f46cf1d5bd7ac3a0766372",
  measurementId: "G-W1S14GEZ4F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
