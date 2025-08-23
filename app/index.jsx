import { View, Text, StatusBar, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import "./global.css";
import QuestionCard from "@/components/QuestionCard";
import { Button } from "react-native-paper";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import questions from "@/data/questions";
import { useState } from "react";
export default function index() {
const [questionIndex, setQuestionIndex] = useState(0);
const [isSelected, setIsSelected] = useState("");

const question = questions[questionIndex];

const onNext = () => {
console.log("questionIndex: before ", questionIndex);
setQuestionIndex((prev) => prev + 1);
};
const handlePress = (data) => {
console.log("data ", data);
// setQuestionIndex((prev) => prev + 1);
};

return (
<SafeAreaView edges={[]} className=" flex-1    ">
    <View className=" flex-1 justify-between items-center ">

        <Pressable className="bg-red-200" style={({ pressed })=> ({
            backgroundColor: pressed ? "red" : "pink",
            padding: 10,
            borderRadius: 8,
            })}
            >
            {" "}
            <Text>click me</Text>{" "}
        </Pressable>

        <View className="gap-3 w-[90%] h-[50%] items-center">
            <QuestionCard question={question} />

            <Text>20sec</Text>
        </View>

        <Pressable onPress={onNext} className=" w-[80%]   bg-sky-300 rounded-lg px-2 border p-2 flex-row justify-end">
            <View className="flex-row w-[55%]   justify-between ">
                <Text className="">Next</Text>
                <FontAwesome name="arrow-circle-right" size={24} color="black" className="" />
            </View>
        </Pressable>
    </View>
</SafeAreaView>
);
}
