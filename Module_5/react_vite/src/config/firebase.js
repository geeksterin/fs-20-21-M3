// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDApSIsudGhcRX3aGfSmOqq4OFLqz31wN4",
    authDomain: "fs-2021-8c05f.firebaseapp.com",
    projectId: "fs-2021-8c05f",
    storageBucket: "fs-2021-8c05f.appspot.com",
    messagingSenderId: "209044946611",
    appId: "1:209044946611:web:0e2d75734bc7050bb63ac6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Todo: Write your own code for the service used
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();