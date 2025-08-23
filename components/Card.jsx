<SafeAreaView edges={[]} className="flex-1 bg-gray-100">
  <View className="flex-1 justify-between items-center">
    
    {/* الزر فوق */}
    <Pressable className="bg-red-200 p-2 rounded-lg">
      <Text>Click me</Text>
    </Pressable>

    {/* الكارت في المنتصف */}
    <QuestionCard question={question} style={{ width: "90%", alignSelf: "center" }} />

    {/* الزر تحت */}
    <Pressable
      onPress={onNext}
      className="w-[80%] bg-sky-300 rounded-lg p-2 flex-row justify-end"
    >
      <View className="flex-row w-[55%] justify-between">
        <Text>Next</Text>
        <FontAwesome name="arrow-circle-right" size={24} color="black" />
      </View>
    </Pressable>

  </View>
</SafeAreaView>
