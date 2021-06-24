import * as firebase from "firebase";
import "firebase/firestore";
import { Alert } from "react-native";

export async function loggingOut() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
}
