import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDqygUEBRfPocpvso41SnnTa0A39rpb16U",
    authDomain: "cars-6b60c.firebaseapp.com",
    projectId: "cars-6b60c",
    storageBucket: "cars-6b60c.firebasestorage.app",
    messagingSenderId: "377148878002",
    appId: "1:377148878002:web:a9e7d4474574b5db892dab"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;