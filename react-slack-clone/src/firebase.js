import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";



var firebaseConfig = {
    apiKey: "AIzaSyApcC1GlZiQdCuKavF9ryZOpza5giS2XJE",
    authDomain: "react-slack-clone-47771.firebaseapp.com",
    projectId: "react-slack-clone-47771",
    storageBucket: "react-slack-clone-47771.appspot.com",
    messagingSenderId: "205857597919",
    appId: "1:205857597919:web:eff751eddb0a0f7474bc6a",
    measurementId: "G-673B895YEC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;