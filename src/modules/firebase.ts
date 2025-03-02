// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqzPMgqoAB1l7pLIpELg-xT6jKGYiTM1Y",
  authDomain: "test-project-e2cba.firebaseapp.com",
  databaseURL: "https://test-project-e2cba-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-project-e2cba",
  storageBucket: "test-project-e2cba.firebasestorage.app",
  messagingSenderId: "100704220110",
  appId: "1:100704220110:web:8265b91857ce012c12f19f",
  measurementId: "G-66FRE3QKV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);