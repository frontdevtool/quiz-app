import { View, Text, StatusBar, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import "./global.css";
import QuestionCard from "@/components/QuestionCard";
import { Button } from "react-native-paper";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import questions from "@/data/questions";
import { useEffect, useState } from "react";
import { useQuestion } from "@/store/store";
import Card from "@/components/Card";
export default function index() {
  const [bestScore, setBestScore] = useState(0);
  const [timer, setTimer] = useState(5);
  const totaleQuestions = questions.length;
  const questionIndex = useQuestion((state) => state.questionIndex);
  const setScore = useQuestion((state) => state.setScore);
  const score = useQuestion((state) => state.score);
  const selected = useQuestion((state) => state.selected);
  const nextQ = useQuestion((state) => state.nextQ);
  const resetQ = useQuestion((state) => state.resetQ);
  const isFinished = questionIndex >= totaleQuestions;
  const question = questions[questionIndex];
  // console.log("question: ", question);

  //   const currentQuestion = useQuestion((state) => state.currentQuestion);
  //   const question = currentQuestion();
  //   console.log("question: ", question);

  useEffect(() => {
    if (isFinished == true && score > bestScore) {
      setBestScore(score);
    }
  }, [isFinished]);

  useEffect(() => {
    setTimer(5);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [question]);
  useEffect(() => {
    if (timer < 0) {
      nextQ();
    }
  }, [timer]);

  const onNext = () => {
    if (isFinished) {
      return resetQ();
    }

    if (selected == question?.correctAnswer) {
      setScore();
    }
    nextQ();
  };

  return (
    <SafeAreaView edges={[]} className=" flex-1    ">
      <View className=" flex-1 justify-between items-center ">
        <Pressable
          className="bg-red-200"
          style={({ pressed }) => ({
            backgroundColor: pressed ? "red" : "pink",
            padding: 10,
            borderRadius: 8,
          })}
        >
          <Text>click me</Text>
        </Pressable>

        {question ? (
          <View className=" gap-5 w-[90%] h-[50%] items-center">
            <Card title={question.title}>
              <QuestionCard question={question} />
            </Card>

            <Text className=" bg-red-200"> {timer} sec</Text>
          </View>
        ) : (
          <Card title={"game over"}>
            <Text>
              correct answer {score} /{totaleQuestions}
            </Text>
            <Text>best score {bestScore}</Text>
          </Card>
        )}

        <Pressable
          onPress={onNext}
          className=" w-[80%]   bg-sky-300 rounded-lg px-2 border p-2 flex-row justify-end"
        >
          <View className="flex-row w-[55%]   justify-between ">
            <Text className="">Next</Text>
            <FontAwesome name="arrow-circle-right" size={24} color="black" />
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
