// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPcTHkmvtCHD62SkmywgLYZ0q70TjRjmY",
  authDomain: "movie-selector-ee66c.firebaseapp.com",
  projectId: "movie-selector-ee66c",
  storageBucket: "movie-selector-ee66c.appspot.com",
  messagingSenderId: "130047467547",
  appId: "1:130047467547:web:0c7575330f00c4543a98be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)