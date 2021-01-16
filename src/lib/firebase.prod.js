import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed'

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyCIM3HZc5wmEq3oS8W2SBcdyzIaaTo60-U",
    authDomain: "netflix-6d02d.firebaseapp.com",
    projectId: "netflix-6d02d",
    storageBucket: "netflix-6d02d.appspot.com",
    messagingSenderId: "1056945030817",
    appId: "1:1056945030817:web:e7a3017eefd417f490d2e0"
};

const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
