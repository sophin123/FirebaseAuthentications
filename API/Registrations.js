import firebase from "firebase";
import "firebase/firestore";
import { Alert } from "react-native";

export async function Registration(email, password, lastName, firstName) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;
    const db = firebase.firestore();
    db.collection("users").doc(currentUser.uid).set({
      email: currentUser.email,
      lastName: lastName,
      firstName: firstName,
    });

    Alert.alert("Registration Successful");
  } catch (err) {
    Alert.alert("There is something wrong!!!!", err.message);
  }
}
