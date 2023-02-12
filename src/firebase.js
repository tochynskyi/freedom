// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAselZT0vQLL9lX_sQQ6Xdu-EnIwAb6fwc",
  authDomain: "freedom-kremenets.firebaseapp.com",
  projectId: "freedom-kremenets",
  storageBucket: "freedom-kremenets.appspot.com",
  messagingSenderId: "590955870374",
  appId: "1:590955870374:web:926e71e449a0838a4bdc67",
  measurementId: "G-W6LMVEYW3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);