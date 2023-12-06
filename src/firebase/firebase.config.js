// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSys_YHz2h1zMnqh5ykwd1p0JoaYjFgLg",
  authDomain: "react-dragon-newso-auth.firebaseapp.com",
  projectId: "react-dragon-newso-auth",
  storageBucket: "react-dragon-newso-auth.appspot.com",
  messagingSenderId: "47333276146",
  appId: "1:47333276146:web:3045d0c9838ddeb2cd136b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export default { app, auth };