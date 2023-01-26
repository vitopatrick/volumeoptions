import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// these are the firebase config files
const firebaseConfig = {
  apiKey: "AIzaSyDctPuUvD9MLVqHIQ9Fqphsfb2HiPzd2kQ",
  authDomain: "coinsignalproprod.firebaseapp.com",
  projectId: "coinsignalproprod",
  storageBucket: "coinsignalproprod.appspot.com",
  messagingSenderId: "200570998416",
  appId: "1:200570998416:web:0f82519f9f70cd4be45215",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
