import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../componentss/Button";
import Input from "../componentss/Input";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { showMessage } from "react-native-flash-message";
import { db } from "../../App";

const Signup = ({ navigation }) => {
  const [gender, setGender] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const genderOptions = ["Male", "Female"];
  const auth = getAuth();

  const signUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const docRef = await addDoc(collection(db, "users"), {
        name,
        email,
        age,
        gender,
        uid: userCredential.user.uid,
      });
      console.log(docRef);
    } catch (err) {
      showMessage({
        message: err.code,
        description: err.message,
        type: "danger",
      });
      console.log(err.code);
      console.log(err.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 16, paddingVertical: 25 }}>
        <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
        <Input
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Input placeholder="Full Name" onChangeText={(text) => setName(text)} />
        <Input placeholder="Age" onChangeText={(text) => setAge(text)} />

        {genderOptions.map((option) => {
          const selected = option === gender;
          return (
            <Pressable
              style={styles.radioContainer}
              key={option}
              onPress={() => setGender(option)}
            >
              <View
                style={[
                  styles.outerCircle,
                  selected && styles.selectedOuterCircle,
                ]}
              >
                <View
                  style={[
                    styles.innerCircle,
                    selected && styles.selectedInnerCircle,
                  ]}
                />
              </View>
              <Text style={styles.genderText}>{option}</Text>
            </Pressable>
          );
        })}

        <Button
          onPress={signUp}
          title="Sign up"
          customStyle={{ alignSelf: "center", marginTop: 60 }}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Pressable
          style={{ marginBottom: 20 }}
          onPress={() => {
            navigation.navigate("Signin");
          }}
        >
          <Text style={{ color: "black" }}>
            Already have an account?{" "}
            <Text style={{ color: "green" }}>Sign In</Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  outerCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: "#cfcfcf",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    width: 15,
    height: 15,
    borderRadius: 15,
    borderColor: "#cfcfcf",
    borderWidth: 1,
  },
  selectedOuterCircle: {
    borderColor: "orange",
  },
  selectedInnerCircle: {
    borderColor: "orange",
    backgroundColor: "orange",
  },
  genderText: {
    marginLeft: 10,
  },
});
