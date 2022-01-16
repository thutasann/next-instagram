import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyB6WjEDoaXuCA4lkC2Fi8nA9ylQvcVrZ8E",
    authDomain: "next-instagram-clone-353fc.firebaseapp.com",
    projectId: "next-instagram-clone-353fc",
    storageBucket: "next-instagram-clone-353fc.appspot.com",
    messagingSenderId: "452512405189",
    appId: "1:452512405189:web:f47e871c682a815f4002ac"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage }; 