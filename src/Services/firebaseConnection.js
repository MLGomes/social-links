import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA8Z5TT8t3AXIeyMX4u8Cu8LaOYlwNnIrQ",
  authDomain: "projeto2022-d13fa.firebaseapp.com",
  projectId: "projeto2022-d13fa",
  storageBucket: "projeto2022-d13fa.appspot.com",
  messagingSenderId: "184174690874",
  appId: "1:184174690874:web:3351c7496e58fdc7b1ab03",
  measurementId: "G-MP62GMFPBL"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth };
