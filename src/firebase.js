import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJ_8o88HYh6edmUEJxu7W1VV_ySI_vvIg",
  authDomain: "c-9890e.firebaseapp.com",
  projectId: "c-9890e",
  storageBucket: "c-9890e.appspot.com",
  messagingSenderId: "1034935300071",
  appId: "1:1034935300071:web:879245ba5b1cc79ad3d742",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
