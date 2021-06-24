import React, { useState } from "react";

import firebase from "firebase";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { Registration } from "../API/Registrations";
import apiKeys from "../Config/apiKeys";

export default function SignUp({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const emptyState = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handlePress = () => {
    console.log("HandlrePress is clicked");
    if (!firstName) {
      Alert.alert("First name is required");
    } else if (!email) {
      Alert.alert("Email field is required.");
    } else if (!password) {
      Alert.alert("Password field is required.");
    } else if (!confirmPassword) {
      setPassword("");
      Alert.alert("Confirm password field is required");
    } else if (password !== confirmPassword) {
      Alert.alert("Password does not match!");
    } else {
      Registration(email, password, lastName, firstName);

      emptyState();
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ScrollView>
          <Text
            style={{
              fontSize: 35,
              position: "relative",
              marginTop: 80,

              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Create an account
          </Text>

          <TextInput
            style={styles.textInputStyle}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            style={[styles.textInputStyle, { marginTop: 20 }]}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />

          <TextInput
            style={[styles.textInputStyle, { marginTop: 20 }]}
            placeholder="Enter your email*"
            value={email}
            onChangeText={(email) => setEmail(email)}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={[styles.textInputStyle, { marginTop: 20 }]}
            placeholder="Enter your password*"
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
          />

          <TextInput
            style={[styles.textInputStyle, { marginTop: 20 }]}
            placeholder="Retype your password to confirm*"
            value={confirmPassword}
            onChangeText={(password2) => setConfirmPassword(password2)}
            secureTextEntry={true}
          />

          <TouchableOpacity
            style={styles.touchableOpacityStyle}
            onPress={handlePress}
          >
            <Text style={styles.textStyle}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touchableOpacityStyle}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={styles.textStyle}>
              Already have an account? Sign In
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 30,

    backgroundColor: "yellow",
  },
  textInputStyle: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    width: "100%",
    textAlign: "center",
  },

  textStyle: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },

  touchableOpacityStyle: {
    marginTop: 20,
    borderWidth: 1,
    padding: 20,
    borderRadius: 8,
    width: "100%",
    backgroundColor: "blue",
  },
});
