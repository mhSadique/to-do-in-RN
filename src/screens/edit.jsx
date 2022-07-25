import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Edit = ({ route }) => {
  const { item } = route.params;
  console.log(item);
  return (
    <SafeAreaView>
      <Text>Edit</Text>
      <Text>{JSON.stringify(item)}</Text>
    </SafeAreaView>
  );
};

export default Edit;
