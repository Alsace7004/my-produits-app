import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const CustomButton  = ({title,handlePress,constainerStyles,textStyles,isLoading}) => {
  return (
    <TouchableOpacity 
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-blue-500 rounded-xl min-h-[62px] justify-center items-center ${constainerStyles} ${isLoading ? 'opacity-50' : ''}`}
      disabled={isLoading}
    >
      <Text className={`text-white text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton 