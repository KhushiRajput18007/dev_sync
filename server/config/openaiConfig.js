// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZvS6ddsDGdQgfNuTJuFakQQhV55wYSTA",
  authDomain: "devsync-17fe3.firebaseapp.com",
  projectId: "devsync-17fe3",
  storageBucket: "devsync-17fe3.firebasestorage.app",
  messagingSenderId: "316179499464",
  appId: "1:316179499464:web:c343714be6a4741ed898fd",
  measurementId: "G-5DZV06H586"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);