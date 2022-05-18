// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCfYMvehUlb_d77cpn4dFHG5jfU1RZPMwQ",
    authDomain: "to-do-569ef.firebaseapp.com",
    projectId: "to-do-569ef",
    storageBucket: "to-do-569ef.appspot.com",
    messagingSenderId: "214960303243",
    appId: "1:214960303243:web:5bb7257787a678a879f88e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth; 