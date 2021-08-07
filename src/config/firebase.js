import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALPuWsRxIfXtiZCRz4LgtChjHYsfQrbFU",
  authDomain: "dbcms-c3910.firebaseapp.com",
  projectId: "dbcms-c3910",
  storageBucket: "dbcms-c3910.appspot.com",
  messagingSenderId: "964977052529",
  appId: "1:964977052529:web:2af7dc682cbe1bc38d04d0",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

const fire = firebase;

export const auth = firebase.auth();
export default fire;
