// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChJEiFpInCSuwlNqs2hwlfdLBkH1TYLnA",
  authDomain: "foodiefinder-a95de.firebaseapp.com",
  projectId: "foodiefinder-a95de",
  storageBucket: "foodiefinder-a95de.appspot.com",
  messagingSenderId: "592218368082",
  appId: "1:592218368082:web:47d19bbcbc70bc0ffa178b",
  measurementId: "G-ZNVZCRHHQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);