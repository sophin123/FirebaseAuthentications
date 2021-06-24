import firebase from "firebase";
import "firebase/firestore";
import { Alert } from "react-native";

export async function signIn(email, password) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
}
