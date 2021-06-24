import firebase from "firebase";

const firebaseConfig = {
  apiKey: "Your API KEY",
  authDomain: "Your authorization domain ID",
  databaseURL: "Your Database URL locations ",
  projectId: "Your Project ID",
  storageBucket: "projectjs-5ed0c.appspot.com",
  messagingSenderId: "Sender ID",
  appId: "App ID",
  measurementId: "Measurement ID",
};

firebase.initializeApp(firebaseConfig);
