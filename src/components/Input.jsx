import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = ({
  placeholder,
  secureTextEntry,
  onChangeText,
  autoCapitalize,
  multiline,
}) => {
  return (
    <TextInput
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={styles.input}
      secureTextEntry={secureTextEntry}
      autoCapitalize={autoCapitalize}
      multiline={multiline}
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
