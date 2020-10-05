import * as firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsZTfBavi8YbOmZwjMunJrtk-DE1H8Ils",
  authDomain: "facebook-clone-2d3ac.firebaseapp.com",
  databaseURL: "https://facebook-clone-2d3ac.firebaseio.com",
  projectId: "facebook-clone-2d3ac",
  storageBucket: "facebook-clone-2d3ac.appspot.com",
  messagingSenderId: "428795318474",
  appId: "1:428795318474:web:253760ff3721879822a433",
  measurementId: "G-64VQEYMLQR"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/admin.directory.customer.readonly');

export {db, auth, firebase, provider}

