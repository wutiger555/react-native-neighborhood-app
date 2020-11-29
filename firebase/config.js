import * as firebase from 'firebase';
import '@firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCYGs8jA2wYwA4C79ccvQ76ZYBlaCA_SkE",
    authDomain: "appfirebase-776d0.firebaseapp.com",
    databaseURL: "https://appfirebase-776d0.firebaseio.com",
    projectId: "appfirebase-776d0",
    storageBucket: "appfirebase-776d0.appspot.com",
    messagingSenderId: "597637758233",
    appId: "1:597637758233:web:4384c925bbac65bf5bd988",
    measurementId: "G-C4Z60EVK5G",
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
// firebase.firestore().enablePersistence();

export { firebase };