import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import GoogleButton from "react-google-button";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../firebase";
import {GoogleAuthProvider} from "@firebase/auth";
import firebase from "firebase/app";

const Register = () => {

  const provider = new firebase.auth.GoogleAuthProvider();

  const signInWithGoogle = () => auth.signInWithPopup(provider); 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);

  const register = async () => {
    try {
      const user = await auth.createUserWithEmailAndPassword
      (email, password);
      console.log("Registered With :",auth.currentUser.email);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await auth.signInWithEmailAndPassword(
        email,
        password,
      );
      console.log("Logged in With :", auth.currentUser.email);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={login} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={register}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
        <Text>OR</Text>
        <GoogleButton onClick={signInWithGoogle}/>
        </View>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
