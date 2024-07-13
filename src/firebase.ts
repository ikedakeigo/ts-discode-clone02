import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUWqsUfcZufaEQnbs_unEU82PZH0Bev6c",
  authDomain: "discode-clone-ce97e.firebaseapp.com",
  projectId: "discode-clone-ce97e",
  storageBucket: "discode-clone-c e97e.appspot.com",
  messagingSenderId: "1046916242742",
  appId: "1:1046916242742:web:146a320d977b1c1e02a797",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
