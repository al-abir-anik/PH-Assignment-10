// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNnalPkP428iA3Z0xJvXiJYEKbCqp7PSA",
  authDomain: "movietrack-c021b.firebaseapp.com",
  projectId: "movietrack-c021b",
  storageBucket: "movietrack-c021b.firebasestorage.app",
  messagingSenderId: "1003303519472",
  appId: "1:1003303519472:web:705df70fad81d234b4ae35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
