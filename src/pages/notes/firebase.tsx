// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlmF0MsP6KRh6yXnEY3SUpIwkzNP0I6ic",
    authDomain: "it35-paluga-abd18.firebaseapp.com",
    projectId: "it35-paluga-abd18",
    storageBucket: "it35-paluga-abd18.appspot.com",
    messagingSenderId: "660777281278",
    appId: "1:660777281278:web:aeb6f226823ee0e10627af",
    measurementId: "G-LW88B4RD38"
  };


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}