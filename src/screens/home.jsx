import React from "react";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

const Home = ({ user, navigation }) => {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Text>My Notes</Text>
        <Pressable onPress={() => navigation.navigate("Create")}>
          <AntDesign name="pluscircleo" size={24} color="black" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Home;
