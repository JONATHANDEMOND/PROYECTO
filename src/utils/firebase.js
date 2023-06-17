import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBXd-pIc1E6KSEHKQZ-gqmjXkP57Z19HVg",
  authDomain: "compu-import.firebaseapp.com",
  projectId: "compu-import",
  storageBucket: "compu-import.appspot.com",
  messagingSenderId: "734796259781",
  appId: "1:734796259781:web:3ea488595b4d7fa1c16bac"
};

export const initFirebase = initializeApp(firebaseConfig);