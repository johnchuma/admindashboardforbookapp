
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCDLDicdUHPNkZpUhZ6AxG3pQvyZa_HojU",
    authDomain: "studentbooks-26327.firebaseapp.com",
    projectId: "studentbooks-26327",
    storageBucket: "studentbooks-26327.appspot.com",
    messagingSenderId: "518344254820",
    appId: "1:518344254820:web:050b94388ae0a6bb8c0671",
    measurementId: "G-G5T0PE10ZX"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app)
export const storage = getStorage(app)