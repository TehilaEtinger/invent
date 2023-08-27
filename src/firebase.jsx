
import {getFirestore} from "firebase/firestore"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiykp8VhnmYMDe0dkYtP01qysxuKA4npo",
  authDomain: "inventory-5e0ce.firebaseapp.com",
  projectId: "inventory-5e0ce",
  storageBucket: "inventory-5e0ce.appspot.com",
  messagingSenderId: "652115076053",
  appId: "1:652115076053:web:c406fd41098ff28eabd35c",
  measurementId: "G-22L1H5TJJP"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const analytics = getAnalytics(app);


export default db; analytics;
