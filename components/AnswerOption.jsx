import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AnswerOption = ({option , onPress , isSelected , className}) => {
  return (
    <Pressable className={className} onPress={()=>onPress(option)} >
      <Text >{option} ? </Text>
    </Pressable>
  )
}

export default AnswerOption

const styles = StyleSheet.create({})