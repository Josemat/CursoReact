// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyApU4gwtr1AwYsBocM6yIfopErewXH83DQ',
  authDomain: 'cr2022-aa352.firebaseapp.com',
  projectId: 'cr2022-aa352',
  storageBucket: 'cr2022-aa352.appspot.com',
  messagingSenderId: '161519782683',
  appId: '1:161519782683:web:56b4812daf28568b39e1be',
  measurementId: 'G-QNWH1RRV6Q',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth = firebase.auth()
export default firebase;
