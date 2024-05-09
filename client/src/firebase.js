// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "psychoseri-10b3c.firebaseapp.com",
  projectId: "psychoseri-10b3c",
  storageBucket: "psychoseri-10b3c.appspot.com",
  messagingSenderId: "395620138692",
  appId: "1:395620138692:web:3acbccf2091ab2200fd391"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

