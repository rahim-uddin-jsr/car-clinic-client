// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKe,
  authDomain: import.meta.env.VITE_authDomai,
  projectId: import.meta.env.VITE_projectI,
  storageBucket: import.meta.env.VITE_storageBucke,
  messagingSenderId: import.meta.env.VITE_messagingSenderI,
  appId: import.meta.env.VITE_appI,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
