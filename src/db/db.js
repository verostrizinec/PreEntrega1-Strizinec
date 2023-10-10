import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCPWb4HdbHldo00L_OgoqzOG7WF7HHCDF0",
    authDomain: "tritato-17935.firebaseapp.com",
    projectId: "tritato-17935",
    storageBucket: "tritato-17935.appspot.com",
    messagingSenderId: "76760486528",
    appId: "1:76760486528:web:a9728ef56c0e94fb4ecc65"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
