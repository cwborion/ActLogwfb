import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAYKEaEgZ41gwg0Zm5lSWrakLK4Vapy2Ik",
  authDomain: "actlog-wfb.firebaseapp.com",
  databaseURL: "https://actlog-wfb.firebaseio.com",
  projectId: "actlog-wfb",
  storageBucket: "actlog-wfb.appspot.com",
  messagingSenderId: "1025454453339"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;