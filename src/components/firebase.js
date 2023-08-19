import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAL1HQRe0OIrmFXlY6n4veT0JfHpOdRpmE",
  authDomain: "mit-2023-firebase01.firebaseapp.com",
  projectId: "mit-2023-firebase01",
  storageBucket: "mit-2023-firebase01.appspot.com",
  messagingSenderId: "1052539983696",
  appId: "1:1052539983696:web:7fcf9ad4eafd85636f7e55"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
