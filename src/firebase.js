import firebase from 'firebase';


const  firebaseConfig = {
    apiKey: "AIzaSyAoaZxWdoDTKTd0NEFdGWd-afBKSanieW8",
    authDomain: "imessage-ce8fa.firebaseapp.com",
    databaseURL: "https://imessage-ce8fa.firebaseio.com",
    projectId: "imessage-ce8fa",
    storageBucket: "imessage-ce8fa.appspot.com",
    messagingSenderId: "413385757150",
    appId: "1:413385757150:web:896989986bdd760bc70d4f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};

  export default db;