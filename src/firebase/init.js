import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

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
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { db, auth };
