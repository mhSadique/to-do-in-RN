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

const Signin = () => {
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
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />
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
        <Pressable style={{ marginBottom: 20 }}>
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
