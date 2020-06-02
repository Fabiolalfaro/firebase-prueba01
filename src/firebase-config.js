import firebase from 'firebase/app';
import 'firebase/firestore';


firebase.initializeApp({
    apiKey: "AIzaSyABqXQPe4yCgo_co3g8pse8-puDQOoziPo",
    authDomain: "prueba-e64ce.firebaseapp.com",
    projectId: "prueba-e64ce"
});
let db = firebase.firestore();
db.settings({timestampsInSnapshots:true});

export default db;