// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJhrzkN7BLZtVOSeNZaWvNb8NoIl2KSKQ",
  authDomain: "eatio-2148d.firebaseapp.com",
  projectId: "eatio-2148d",
  storageBucket: "eatio-2148d.appspot.com",
  messagingSenderId: "33320458600",
  appId: "1:33320458600:web:bb981d1a1ad931ba4c1edd",
  measurementId: "G-D22CYGHME2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
