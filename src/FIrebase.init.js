// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBCQ0XuxmCDIfIxhKBN68FzCF9O3cdduoM",
    authDomain: "volunteer-network-b53c6.firebaseapp.com",
    projectId: "volunteer-network-b53c6",
    storageBucket: "volunteer-network-b53c6.appspot.com",
    messagingSenderId: "490264439454",
    appId: "1:490264439454:web:c5b82b4bd38be1e4bd698f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth