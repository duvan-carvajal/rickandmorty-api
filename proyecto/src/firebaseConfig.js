import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyA24zplgjtmqb4YcCrhV-WDHJHbYxPjpnQ",
  authDomain: "rick-and-morty-api-f9beb.firebaseapp.com",
  projectId: "rick-and-morty-api-f9beb",
  storageBucket: "rick-and-morty-api-f9beb.firebasestorage.app",
  messagingSenderId: "859342665044",
  appId: "1:859342665044:web:b09f7ff3b3969f0cd984c1",
  measurementId: "G-GM98EX0WMH"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app); // ✅ ¡Esto es necesario!
export { auth, db };