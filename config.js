import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAGb3fLsG8Qe9jAl4-GBxpOcs5-pqTZTMg",
  authDomain: "e-ride-8e011.firebaseapp.com",
  projectId: "e-ride-8e011",
  storageBucket: "e-ride-8e011.appspot.com",
  messagingSenderId: "567250473860",
  appId: "1:567250473860:web:d899180d2133a5f4a843d1"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
