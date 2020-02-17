import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyDdGBhXx-q--Hg3rdQsh_YRrepO4iqTW1Q",
    authDomain: "maxiss-648af.firebaseapp.com",
    databaseURL: "https://maxiss-648af.firebaseio.com",
    projectId: "maxiss-648af",
    storageBucket: "maxiss-648af.appspot.com",
    messagingSenderId: "1055440989694",
    appId: "1:1055440989694:web:dc31295ad1558850"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
let database = firebase.database();
export default database;