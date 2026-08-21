import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "intervai-a1b01.firebaseapp.com",
  projectId: "intervai-a1b01",
  storageBucket: "intervai-a1b01.firebasestorage.app",
  messagingSenderId: "314955472411",
  appId: "1:314955472411:web:94fc90a8208fe7b15322be"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth,provider}