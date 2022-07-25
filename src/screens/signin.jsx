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
import Button from "../components/Button";
import Input from "../components/Input";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../App";

const Signin = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("logged in -->", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        source={require("../../assets/empty-state.png")}
        style={{ width: 350, height: 350, alignSelf: "center" }}
      />
      <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}>
        Never forget your notes
      </Text>

      <View style={{ paddingHorizontal: 16, paddingVertical: 25 }}>
        <Input
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          title="Login"
          customStyle={{ alignSelf: "center", marginTop: 60 }}
          onPress={login}
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
            navigation.navigate("Signup");
          }}
        >
          <Text style={{ color: "black" }}>
            Don't have an account?{" "}
            <Text style={{ color: "green" }}>Sign Up</Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    height: 48,
    borderBottomColor: "#ccc",
  },
});

export default Signin;
