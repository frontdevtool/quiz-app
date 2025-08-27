import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({children , title , className}) => {
// console.log('className: ', className);
return (
<View className={`${className}`} style={styles.card}>
    <Text className='text-center h-10 ' numberOfLines={2}> {title} </Text>
    <View className='bg-red-300 p-2 '>

        {children}
    </View>
</View>
)
}

export default Card

const styles = StyleSheet.create({
card: {
// backgroundColor: "white",
borderRadius: 20,
padding: 20,
paddingVertical: 30,
// gap: 20,

// Shaddow
shadowColor: "#000",
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
},

})
