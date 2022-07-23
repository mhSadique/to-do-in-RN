import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = ({ placeholder, secureTextEntry }) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    height: 68,
    borderBottomColor: "#ccc",
  },
});
