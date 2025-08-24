import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AnswerOption from "./AnswerOption";

const QuestionCard = ({ question }) => {
  const [selected, setSelected] = useState(null); // يخزن الخيار المختار


  return (
    <View className="  rounded-lg flex-1  " style={styles.card}>
      {/* <Text> {question.title} </Text> */}
      <View className="gap-3">
        {question.options.map((option, index) => {
            return <AnswerOption key={index} option={option}   onPress={() => setSelected(index)}
             className={`border p-2  rounded-md ${
               selected === index ? "bg-blue-500" : "bg-white"
            }`}
            />

        })}
      </View>
    </View>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
  // card: {
  //   backgroundColor: "white",
  //   borderRadius: 20,
  //   padding: 20,
  //   paddingVertical: 30,
  //   gap: 20,

  //   // Shaddow
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,

  //   elevation: 5,
  // },
});
