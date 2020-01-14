import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "pwbfullcrud.firebaseapp.com",
  databaseURL: "https://pwbfullcrud.firebaseio.com",
  projectId: "pwbfullcrud",
  storageBucket: "pwbfullcrud.appspot.com",
  messagingSenderId: "378863871690",
  appId: "1:378863871690:web:3f3820a9eb783e210a7633",
  measurementId: "G-RR9QG6F3QC"
}

firebase.initializeApp(config);
firebase.firestore();

export default firebase;