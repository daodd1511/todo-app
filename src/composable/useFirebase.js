import { initializeApp } from "firebase/app"
import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyD5G1tB0tO3pSHEDtY8yzROY9uQrsYFSs4",
    authDomain: "todo-e47c0.firebaseapp.com",
    databaseURL: "https://todo-e47c0-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "todo-e47c0",
    storageBucket: "todo-e47c0.appspot.com",
    messagingSenderId: "391559150737",
    appId: "1:391559150737:web:2231f001dd5f4ec3991330"
  };
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
