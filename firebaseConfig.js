// Versi konsisten Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyBlNHkA1f-1GwBN0nBchMtIwEYUNLlq8FQ",
    authDomain: "e-commerce-a6fe2.firebaseapp.com",
    databaseURL: "https://e-commerce-a6fe2-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "e-commerce-a6fe2",
    storageBucket: "e-commerce-a6fe2.firebasestorage.app",
    messagingSenderId: "169688929056",
    appId: "1:169688929056:web:8d04f0b02c98fa77d1bd45",
    measurementId: "G-Q8FP7FQQHV"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

export { app, auth, db, storage };
