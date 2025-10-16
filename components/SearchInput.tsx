import { Ionicons } from "@expo/vector-icons";
import { router, usePathname } from 'expo-router';
import React, { useState } from 'react';
import { Alert, TextInput, TouchableOpacity, View } from 'react-native';

const SearchInput = ({initialQuery}) => {
   const pathname = usePathname();
   const [query,setQuery] = useState(initialQuery || '')
  return (
    

        <View className='border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4'>
            <TextInput
                className="flex-1 text-black text-base mt-0.5"
                value={query}
                placeholder="Rechercher un produit"
                placeholderTextColor="#000000"
                onChangeText={(e)=>setQuery(e)}
            />
            <TouchableOpacity
                onPress={()=>{
                    if(!query){
                        return Alert.alert('Attention',"Veuillez saisir un produit pour la recherche");
                    }
                    if(pathname.startsWith('/search')) router.setParams({query})
                    else router.push(`/search/${query}`);
                }}
            >
                 <Ionicons name='search' size={24}/>
            </TouchableOpacity>
        </View>


  )
}

export default SearchInput