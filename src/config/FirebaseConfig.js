 import firebase from 'firebase/app';
 import 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';


 
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBm46LyKyOLWbZ6I4epd0kdY5-s-XXuzTA",
    authDomain: "r-plan-it.firebaseapp.com",
    databaseURL: "https://r-plan-it.firebaseio.com",
    projectId: "r-plan-it",
    storageBucket: "r-plan-it.appspot.com",
    messagingSenderId: "18329037318"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});



  export default firebase;