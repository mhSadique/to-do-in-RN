import React from "react";
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

const Signin = ({ navigation }) => {
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
        <Input placeholder="Email" />
        <Input placeholder="Password" secureTextEntry={true} />
        <Button
          title="Login"
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
