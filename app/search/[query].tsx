import axiosClient from '@/axios';
import Produit from '@/components/Produit';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchInput from '../../components/SearchInput';
const Search = () => {
    const {query} = useLocalSearchParams();
    const [data,setData] = useState([])
    const getAllProducts = async ()=>{
        try {
            const response = await axiosClient.get('/products');
            console.log('valeur de response dans getProducts:',JSON.stringify(response.data,null,2))
            const produits = response.data;
            setData(produits);
        } catch (error) {
            console.log('valeur de error dans getProducts :',error)
        }
    }

    useEffect(()=>{
        getAllProducts()
    },[query]);



  return (
    <SafeAreaView className="h-full">
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={(item)=>item.id}
          renderItem={({item})=>(
            <Produit produits={item}/>
          )}
          columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 10 }}
          contentContainerStyle={{ paddingHorizontal: 16 }} 
          ListHeaderComponent={()=>(
            <View className="my-6">
                      <Text className="font-pmedium text-sm text-black">Résultats de la recherche</Text>
                      <Text className="text-2xl font-psemibold text-black">{query}</Text>
                      <View className="mt-6 mb-8">
                          <SearchInput initialQuery={query}/>
                      </View>
            </View>
          )}
        />
    </SafeAreaView>
  )
}

export default Search