// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyADjl2HudcRb9crRCDPEEzInYXdTW3hzmU",
  authDomain: "ogs-storage.firebaseapp.com",
  projectId: "ogs-storage",
  storageBucket: "ogs-storage.appspot.com",
  messagingSenderId: "76907953275",
  appId: "1:76907953275:web:293a98b26896ad6e37f6de",
  measurementId: "G-82D4C6JCZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const storage = getStorage(app)