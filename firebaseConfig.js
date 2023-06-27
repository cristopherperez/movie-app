import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-J0_JljkCtHBg1gJC4j6gN5VvGmKfFLQ",
  authDomain: "movie-app-2023-45107.firebaseapp.com",
  projectId: "movie-app-2023-45107",
  storageBucket: "movie-app-2023-45107.appspot.com",
  messagingSenderId: "626712935158",
  appId: "1:626712935158:web:6c0d8f813a07147e4ecad7",
};

initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
