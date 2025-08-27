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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTimer } from "@/hooks/useTimer";
export default function index() {
  const [bestScore, setBestScore] = useState(0);
  // const [timer, setTimer] = useState(5);
  const totaleQuestions = questions.length;
  const questionIndex = useQuestion((state) => state.questionIndex);
  const setScore = useQuestion((state) => state.setScore);
  const score = useQuestion((state) => state.score);
  const selected = useQuestion((state) => state.selected);
  const nextQ = useQuestion((state) => state.nextQ);
  const resetQ = useQuestion((state) => state.resetQ);
  const isFinished = questionIndex >= totaleQuestions;
  const question = questions[questionIndex];
  const { timer, startTimer, clearTimer } = useTimer(5);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    startTimer();

    return () => {
      clearTimer();
    };
  }, [question]);

  useEffect(() => {
    if (isFinished == true && score > bestScore) {
      setBestScore(score);
      storeData(score);
    }
  }, [isFinished]);

  // useEffect(() => {
  //   if (timer < 0) {
  //     nextQ();
  //   }
  // }, [timer]);
  const onNext = () => {
    if (isFinished) {
      resetQ();
      return;
    }

    if (selected == question?.correctAnswer) {
      setScore();
    }
    nextQ();
  };

  const storeData = async (value) => {
    try {
      console.log("value: ", value);
      await AsyncStorage.setItem("my-key", value.toString());
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("my-key");
      if (value !== null) {
        setBestScore(Number.parseInt(value));
      }
    } catch (e) {
      console.log("error: ", e);
    }
  };

  return (
    <SafeAreaView edges={[]} className=" flex-1    ">
      <View className=" flex-1 justify-around items-center border m-2 ">
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
          <View className="w-[90%] h-[70%] p-1 bg-slate-300  items-center  justify-center  border-2">
            <Card title={question.title} className=" w-full h-[90%] justify-center gap-5 bg-sky-500 ">
              <QuestionCard question={question} />
            </Card>

            <Text className=" w-full text-center mt-2">
              {timer} sec
            </Text>
          </View>
        ) : (
          <Card title={"game over"} className={'  w-[90%] bg-red-200 '}>
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
