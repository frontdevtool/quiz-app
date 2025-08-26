import { Pressable, StyleSheet, Text, View } from "react-native";
import AnswerOption from "./AnswerOption";
import { useQuestion } from "@/store/store";
import { useEffect } from "react";

const QuestionCard = ({ question }) => {

  const setSelected = useQuestion((state)=>state.setSelected)
  const selected = useQuestion((state)=>state.selected)
useEffect(() => {
  // console.log('==> card mounted',   )
  
  return ()=>{
    
    // console.log('==> card UNmounted',   )
  }

 
}, [question])


  return (
    <View className="  rounded-lg flex-1  " style={styles.card}>
      {/* <Text> {question.title} </Text> */}
      <View className="gap-3">
        {question.options.map((option, index) => {
            return <AnswerOption key={index} option={option}   onPress={() => setSelected(option)}
             className={`border p-2  rounded-md ${
               selected === option ? "bg-blue-500" : "bg-white"
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
