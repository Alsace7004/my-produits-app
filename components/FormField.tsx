import React from 'react'
import { Text, TextInput, View } from 'react-native'


const FormField = ({title,value,placeholder,handleTextChange,otherStyles,...props}) => {

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className='text-base text-black'>{title}</Text>

            <View className='border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row'>
                <TextInput
                    className="flex-1 text-black text-base"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#000000"
                    onChangeText={handleTextChange}
                />
            </View>
        </View>
    )
}

export default FormField