

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { addDoc, collection, deleteDoc, deleteField, doc, getDoc, getFirestore, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8e8LNKukOx3QeKTUTRNtKNvDrrxPRYR4",
    authDomain: "test-db-2f99b.firebaseapp.com",
    projectId: "test-db-2f99b",
    storageBucket: "test-db-2f99b.appspot.com",
    messagingSenderId: "1011995122988",
    appId: "1:1011995122988:web:d95626332b88fc50722089",
    measurementId: "G-R7YLYXDQLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();















