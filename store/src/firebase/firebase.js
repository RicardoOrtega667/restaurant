// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEb5y6JJPDCke1G_2sZpkxyXC6UKzBrK0",
  authDomain: "db-restaurant-4d926.firebaseapp.com",
  projectId: "db-restaurant-4d926",
  storageBucket: "db-restaurant-4d926.appspot.com",
  messagingSenderId: "1049588710328",
  appId: "1:1049588710328:web:63cbbf3cbceb9e63002d4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);