// src/lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
 apiKey: "AIzaSyAgAFsJc2y26tJ0hUIAjeZjA1nzE8JqyMg",
  authDomain: "garsideapp.firebaseapp.com",
  projectId: "garsideapp",
  storageBucket: "garsideapp.firebasestorage.app",
  messagingSenderId: "475862330303",
  appId: "1:475862330303:web:ca2ff6138c234ae2e7cf0a",
  measurementId: "G-C697YVGXLR"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
