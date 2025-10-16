import React from 'react'
import { Text, View } from 'react-native'

const CustomEmptyState = ({title,subtitle}) => {
  return (
    <View className="justify-center items-center px-4">
        <Text className="text-xl text-center text-black mt-2">{title}</Text>
        <Text className="text-sm text-black-100 text-center">{subtitle}</Text>            
    </View>
  )
}

export default CustomEmptyState