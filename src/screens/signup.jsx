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

const Signup = ({ navigation }) => {
  const [gender, setGender] = useState(null);
  const genderOptions = ["Male", "Female"];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 16, paddingVertical: 25 }}>
        <Input placeholder="Email" />
        <Input placeholder="Password" secureTextEntry />
        <Input placeholder="Full Name" />
        <Input placeholder="Age" />

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
