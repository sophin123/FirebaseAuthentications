import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { signIn } from "../API/SignIn";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePress = () => {
    if (!email) {
      Alert.alert("Email field is required");
    }

    if (!password) {
      Alert.alert("Password field is required");
    }

    signIn(email, password);

    setEmail("");
    setPassword("");

    navigation.navigate("Loading");
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 25,
          textAlign: "center",
          marginTop: 30,
          marginBottom: 130,
        }}
      >
        SignIn
      </Text>
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

      <TouchableOpacity
        style={styles.touchableOpacityStyle}
        onPress={handlePress}
      >
        <Text style={styles.textStyle}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touchableOpacityStyle}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.textStyle}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textInputStyle: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    width: "100%",
    textAlign: "center",
  },
  touchableOpacityStyle: {
    marginTop: 20,
    borderWidth: 1,
    padding: 20,
    borderRadius: 8,
    width: "100%",
    backgroundColor: "blue",
  },

  textStyle: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
