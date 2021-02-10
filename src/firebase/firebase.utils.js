import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyCN8FfS4JTTI-6eQ1bsVrbOGPmbk6BZQPs",
    authDomain: "crwn-db-f2ba9.firebaseapp.com",
    projectId: "crwn-db-f2ba9",
    storageBucket: "crwn-db-f2ba9.appspot.com",
    messagingSenderId: "458451126228",
    appId: "1:458451126228:web:183c0fe8c5ce5a687a7841",
    measurementId: "G-C2H4VVRS87"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({'prompt':'select_account'});

export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;