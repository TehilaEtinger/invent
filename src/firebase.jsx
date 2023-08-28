
import {getFirestore} from "firebase/firestore"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_Fw9ggsDW7orLQuBWoXTPFGDt-HRjBsI",
  authDomain: "onegshabat-8ee62.firebaseapp.com",
  projectId: "onegshabat-8ee62",
  storageBucket: "onegshabat-8ee62.appspot.com",
  messagingSenderId: "83605291190",
  appId: "1:83605291190:web:1630362da566f15a20a617",
  measurementId: "G-WJ4P43G7EF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)


export default db; analytics;
