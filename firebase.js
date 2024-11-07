import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkn0hli2_mXCPxX39TlmRNOoX8bnh7T6E",
  authDomain: "uber-clone-3521f.firebaseapp.com",
  projectId: "uber-clone-3521f",
  storageBucket: "uber-clone-3521f.firebasestorage.app",
  messagingSenderId: "862631153385",
  appId: "1:862631153385:web:5fb2df1bf7024dad152a78",
  measurementId: "G-SZSXVV63Y7"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth}