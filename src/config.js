import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";
// import { getMessaging,getToken } from "firebase/messaging";


const firebaseConfig = {
  apiKey: "AIzaSyCLzeoLk6VVeE_65ZVTEnVubwZ6dXUnntQ",
  authDomain: "rncallpoc.firebaseapp.com",
  projectId: "rncallpoc",
  storageBucket: "rncallpoc.appspot.com",
  messagingSenderId: "477898552320",
  appId: "1:477898552320:web:2c41cfbab0ae2d9357d4e5"
};

const app = initializeApp(firebaseConfig);
// export const messaging = getMessaging(app);
export const db = getFirestore(app);
