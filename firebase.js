// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApSpMAiCPxNNtBWNnryLq0ZNO48nk8HMU",
  authDomain: "login-kotitas.firebaseapp.com",
  projectId: "login-kotitas",
  storageBucket: "login-kotitas.appspot.com",
  messagingSenderId: "375311958475",
  appId: "1:375311958475:web:5813b5a89772e115d4f64e",
  measurementId: "G-64JL0TLFZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;