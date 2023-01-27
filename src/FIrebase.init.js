// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyC_S_FqWvGVabXUEo0y58z_447krHEjdF0",
  authDomain: "mrihistory.firebaseapp.com",
  projectId: "mrihistory",
  storageBucket: "mrihistory.appspot.com",
  messagingSenderId: "523362963073",
  appId: "1:523362963073:web:40284baf01e25a15460780",
  measurementId: "G-6E3M7CHHZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth