import React, { Component } from "react";
import { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Alert } from "react-native";

import firebase from "firebase";

export default function Loading({ navigation }) {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Dashboard");
        console.log("Dashboard being called");
      } else {
        navigation.navigate("Home");
        console.log("Home being called");
      }
    });
  });

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
});
