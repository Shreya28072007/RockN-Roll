import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDabOkPP6IoVisIfNggxLfEbXT2Jn1HDlg",
  authDomain: "rock-n--roll.firebaseapp.com",
  databaseURL: "https://rock-n--roll-default-rtdb.firebaseio.com",
  projectId: "rock-n--roll",
  storageBucket: "rock-n--roll.appspot.com",
  messagingSenderId: "596423094200",
  appId: "1:596423094200:web:c64660a9509f87a43b694d"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();