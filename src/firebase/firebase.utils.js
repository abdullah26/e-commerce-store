import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAmqC-qyscbWCX6Kly8-TGW3iSJTQtj3B0",
  authDomain: "crwn-db-3e196.firebaseapp.com",
  projectId: "crwn-db-3e196",
  storageBucket: "crwn-db-3e196.appspot.com",
  messagingSenderId: "970630019367",
  appId: "1:970630019367:web:bc4de2ea3da31c65fd5102",
  measurementId: "G-9MQBGR9DY7",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
