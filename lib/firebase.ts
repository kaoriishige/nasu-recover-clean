// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtTt0fWthsU6Baq1fJwUx8CgSakoZnMXY",
  authDomain: "minna-no-nasu-app.firebaseapp.com",
  projectId: "minna-no-nasu-app",
  storageBucket: "minna-no-nasu-app.appspot.com",
  messagingSenderId: "885979930856",
  appId: "1:885979930856:web:2b06441bc2d497cf3e695d",
  measurementId: "G-FNY4RBQKHW",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export { app };



