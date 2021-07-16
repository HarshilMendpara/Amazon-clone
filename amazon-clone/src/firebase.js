// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDXod5mJ1LWR6PdC_C9mdTnOmxbJS8tO9E",
    authDomain: "clone-9f820.firebaseapp.com",
    projectId: "clone-9f820",
    storageBucket: "clone-9f820.appspot.com",
    messagingSenderId: "1047177826975",
    appId: "1:1047177826975:web:7be36f8f27087e7acf88aa",
    measurementId: "G-DMZ671GNN7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };