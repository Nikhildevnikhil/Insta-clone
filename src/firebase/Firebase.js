import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRmC-VAUf537YIhvA9ybMnBJgjDTp5k4I",
  authDomain: "insta-clone-a2b33.firebaseapp.com",
  projectId: "insta-clone-a2b33",
  storageBucket: "insta-clone-a2b33.appspot.com",
  messagingSenderId: "1097052270935",
  appId: "1:1097052270935:web:d0ded5a4401205302f4e12",
  measurementId: "G-PFMVTDG6RV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
