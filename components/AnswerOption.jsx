import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useQuestion } from '@/store/store'
import React from 'react'

const AnswerOption = ({option , onPress , isSelected , className}) => {

  // console.log('selected: ', selected);
  return (
    <Pressable className={className} onPress={onPress} >
      <Text >{option} ? </Text>
    </Pressable>
  )
}

export default AnswerOption

const styles = StyleSheet.create({})