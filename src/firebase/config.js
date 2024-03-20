//* firebase-imports
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBxpDcsBYMmisXO2f5HCd4GK7gK-tO-XJU",
  projectId: "recipehaven-81d2b",
  authDomain: "recipehaven-81d2b.firebaseapp.com",
  storageBucket: "recipehaven-81d2b.appspot.com",
  messagingSenderId: "664133517164",
  appId: "1:664133517164:web:2e20355dbc2537bbc47d49",
};

//* initialize-firebase
const app = initializeApp(firebaseConfig);

//* initialize-firestore
const db = getFirestore();

//* initialize-firebase-auth
const auth = getAuth();

//* initialize-firebase-storage
const storage = getStorage(app);

export { db, auth, storage };
