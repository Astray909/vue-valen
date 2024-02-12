// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsTRLJjFBPWbF4wp9Ncd4hH4LxUJ-BwLw",
    authDomain: "vue-balda.firebaseapp.com",
    projectId: "vue-balda",
    storageBucket: "vue-balda.appspot.com",
    messagingSenderId: "816428311662",
    appId: "1:816428311662:web:c53ec22fcbb6f6b702b27f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db
