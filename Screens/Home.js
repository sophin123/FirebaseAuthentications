import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 35,
          position: "relative",
          marginTop: 80,
          marginBottom: 180,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Firebase Authentication
      </Text>
      <TouchableOpacity
        style={styles.touchableOpacityStyle}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={styles.textStyle}>SignIn</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.touchableOpacityStyle, { marginTop: 30 }]}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.textStyle}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",

    flex: 1,
    padding: 20,
    alignItems: "center",
  },

  touchableOpacityStyle: {
    borderWidth: 1,
    padding: 20,
    borderRadius: 8,
    width: "100%",
  },

  textStyle: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
