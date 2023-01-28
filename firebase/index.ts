import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// these are the firebase config files
const firebaseConfig = {
  apiKey: "AIzaSyBa5BZhTtnXXcva_wf1X1TWiXUCgXr13JI",
  authDomain: "volumeexchange-e624a.firebaseapp.com",
  projectId: "volumeexchange-e624a",
  storageBucket: "volumeexchange-e624a.appspot.com",
  messagingSenderId: "389273415657",
  appId: "1:389273415657:web:cc6fd45118313f7df9a578",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);