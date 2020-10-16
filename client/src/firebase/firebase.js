import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDKRlJEEMeZPS91IaCIcXDXrNCyEK9Zdkw',
  authDomain: 'hackccelerate--2020-hood.firebaseapp.co',
  databaseURL: 'https://hackccelerate--2020-hood.firebaseio.com',
  projectId: 'hackccelerate--2020-hood',
  storageBucket: 'hackccelerate--2020-hood.appspot.com',
  messagingSenderId: '956348979510',
  appId: '1:956348979510:web:2159212e710250f873fb97'
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { storage, firebase, googleAuthProvider, database as default };