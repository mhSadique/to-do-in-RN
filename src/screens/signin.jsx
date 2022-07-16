import React from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Signin = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <Image source={require('../../assets/empty-state.png')} style={{width: 400, height: 400}}/>
      {/* <Image source={require('../../assets/empty-state.png')} style={{alignSelf: 'center'}} resizeMode='center'/> */}
    </SafeAreaView>
  );
};

export default Signin;
