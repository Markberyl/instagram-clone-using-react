// src/firebase/FirebaseInit.js

import fb from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseApp = fb.initializeApp({
  apiKey: "AIzaSyA3qdv1dztkshZlWIRvYIx4Rg50WdQiu-k",
  authDomain: "instagram-clone-f420b.firebaseapp.com",
  databaseURL: "https://instagram-clone-f420b-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-f420b",
  storageBucket: "instagram-clone-f420b.appspot.com",
  messagingSenderId: "82602181581",
  appId: "1:82602181581:web:1e4e39f4cf958bc1543a84",
  measurementId: "G-PTKDZME9B9"
});

const db = firebaseApp.firestore();
const auth = fb.auth();
const storage = fb.storage();

export { db, auth, storage, fb };