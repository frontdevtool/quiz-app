import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center items-center gap-10">
      <Text>HomeScreen</Text>
      {/* <Button mode="contained" onPress={() => navigation.navigate("profile",{name : 'kazem'})} >
        Go to Profile
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate("settings" , {name : 'sami'})} >
        Go to settings
      </Button> */}
    </View>
  );
};

export default HomeScreen;
