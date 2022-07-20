import React from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Signin = () => {
  return (
    <SafeAreaView>
      <Image
        source={require("../../assets/empty-state.png")}
        style={{ width: 350, height: 350, alignSelf: 'center' }}
      />
      <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>Never forget your notes</Text>

      <View style={{paddingHorizontal: 16, paddingVertical: 25}}>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1, 
    height: 48, 
    borderBottomColor: '#ccc'
  }
})

export default Signin;
