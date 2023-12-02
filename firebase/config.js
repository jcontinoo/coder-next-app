import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdhGd35FnP8PM5mRe8B4S7mabYUOlb0PM",
  authDomain: "coder-app-nextjs.firebaseapp.com",
  projectId: "coder-app-nextjs",
  storageBucket: "coder-app-nextjs.appspot.com",
  messagingSenderId: "363976651726",
  appId: "1:363976651726:web:e77a518e5162ea9616719f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);