import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { db } from "../../App";
import Button from "../components/Button";
import Input from "../components/Input";

const noteColorOptions = ["red", "green", "blue"];
const Create = ({ user }) => {
  const [noteColor, setNoteColor] = useState("blue");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const onPressCreate = async () => {
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "notes"), {
        title,
        description,
        color: noteColor,
        uid: user.uid,
      });
      setLoading(false);
      console.log(docRef);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <SafeAreaView>
      <View style={{ padding: 10 }}>
        <Input placeholder="Title" onChangeText={(text) => setTitle(text)} />
        <Input
          placeholder="Description"
          onChangeText={(text) => setDescription(text)}
          multiline={true}
        />
      </View>
      <View style={{ marginTop: 20, padding: 10 }}>
        <Text>Select your note color</Text>
      </View>
      <View style={{ paddingLeft: 10 }}>
        {noteColorOptions.map((option) => {
          const selected = option === noteColor;
          return (
            <Pressable
              style={styles.radioContainer}
              key={option}
              onPress={() => setNoteColor(option)}
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
      </View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Button
          onPress={onPressCreate}
          title="Login"
          customStyle={{
            alignSelf: "center",
            marginTop: 60,
            width: "100%",
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default Create;

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
