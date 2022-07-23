import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = ({
  placeholder,
  secureTextEntry,
  onChangeText,
  autoCapitalize,
}) => {
  return (
    <TextInput
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={styles.input}
      secureTextEntry={secureTextEntry}
      autoCapitalize={autoCapitalize}
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
