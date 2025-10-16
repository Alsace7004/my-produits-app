
import CustomButton from '@/components/CustomButton';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function ProductDetail() {



  const {id, title, price, image, category,description } = useLocalSearchParams();

  return (
    <SafeAreaView className="h-full flex">
        <View className="flex-[0.5]">
          <Image
            source={{ uri: image }}
            className="h-full w-full object-cover"
          />
        </View>

    
         <ScrollView className="flex-[0.5] p-6 " contentContainerStyle={{ paddingBottom: 50 }}>
          <Text className="text-2xl text-black mb-4">{title}</Text>
          <Text className="text-sm text-black mb-1">Catégorie : {category}</Text>
          {price && (
            <Text className="text-xl text-black mb-4">{(price)} XOF</Text>
          )}
          <Text className=" text-black mb-2">Description : {description}</Text>

     
            <CustomButton
              title="Ajouté au panier"
              constainerStyles="mt-7"
            /> 
        
          
        </ScrollView> 
     
    </SafeAreaView>
  );
}

