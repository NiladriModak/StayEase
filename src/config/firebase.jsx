// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPZM70g9X2x3FcBX7s3BAPyRx3_BVzxOk",
  authDomain: "stayease-c60a5.firebaseapp.com",
  projectId: "stayease-c60a5",
  storageBucket: "stayease-c60a5.firebasestorage.app",
  messagingSenderId: "999629646827",
  appId: "1:999629646827:web:453315707d13417ee187ae",
  measurementId: "G-Q6KQRBD048",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export default auth;
