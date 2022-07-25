import React, { useEffect, useState } from "react";
import { View, Text, Pressable, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../App";

const Home = ({ user, navigation }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // create the query
    const q = query(collection(db, "notes"), where("uid", "==", user.uid));
    // create listener to listen to the query that we have just made
    const notesListenerSubscription = onSnapshot(q, (querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        list.push(doc.data());
      });
      setNotes(list);
    });
  }, []);

  const renderItem = ({ item }) => {
    const { title, color, description } = item;
    return (
      <Pressable
        onPress={() => navigation.navigate("Edit", { item })}
        style={{
          backgroundColor: color,
          marginBottom: 25,
          borderRadius: 15,
          padding: 15,
        }}
        key={title}
      >
        <Text style={{ color: "white", fontSize: 24 }}>{title}</Text>
        <Text style={{ color: "white", fontSize: 18, marginTop: 16 }}>
          {description}
        </Text>
      </Pressable>
    );
  };

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
      <View>
        <FlatList
          data={notes}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          contentContainerStyle={{ padding: 20 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
