import React from "react";
import { View, Text } from "react-native";

const Home = ({ user }) => {
  return (
    <View>
      <Text>Home</Text>
      <Text>{JSON.stringify(user)}</Text>
    </View>
  );
};

export default Home;
