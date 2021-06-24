import React, { Component } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";

import firebase from "firebase";
import { useState } from "react";
import { useEffect } from "react";
import { loggingOut } from "../API/LogginOut";

export default function Dashboard({ navigation }) {
  let currentUserID = firebase.auth().currentUser.uid;
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    async function getUserInfo() {
      let doc = await firebase
        .firestore()
        .collection("users")
        .doc(currentUserID)
        .get();

      if (!doc.exists) {
        Alert.alert("No user data found!");
      } else {
        let dataObj = doc.data();

        setFirstName(dataObj.firstName);
      }
    }
    getUserInfo();
  }, []);

  const handlePress = () => {
    loggingOut();
    navigation.replace("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}> DashBoard </Text>
      <Text style={{ fontSize: 30 }}> Welcome : {firstName} </Text>

      <TouchableOpacity
        style={styles.touchableOpacityStyle}
        onPress={handlePress}
      >
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
  touchableOpacityStyle: {
    borderWidth: 1,
    padding: 20,
    borderRadius: 8,
    backgroundColor: "red",
  },
});
