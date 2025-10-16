import axiosClient from '@/axios';
import CustomEmptyState from '@/components/CustomEmptyState';
import Produit from '@/components/Produit';
import SearchInput from '@/components/SearchInput';
import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Index = () => {

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
    },[]);
     const [refreshing,setRefreshing] = useState(false)

    const onRefresh = async ()=>{
        setRefreshing(true)
        await getAllProducts();
        setRefreshing(false)
    }
    
  return (
    <SafeAreaView className="h-full">
       
            <FlatList
                data={data} 
                numColumns={2}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=>(
                    <Produit produits={item}/>
                )}
                columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 0 }}
                contentContainerStyle={{ paddingHorizontal: 16 }} 
                ListHeaderComponent={()=>(
                              <View className="my-6 space-y-6">
                                  <View className="justify-between items-start flex-row mb-6">
                                      {/*Gauche*/}
                                      <View>
                                        <Text className="font-pmedium text-sm text-black">Bienvenu sur my-produits-app</Text>
                                      </View>
                                  </View>
                                  {/*Search*/}
                                  <SearchInput/>
                              </View>
                )}
                ListEmptyComponent={()=>(
                    <CustomEmptyState
                        title="Pas de produit trouvé"
                        subtitle="Veuillez verifié votre connexion internet"
                    />
                )}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
                initialNumToRender={10}
                windowSize={5} 
            />
      
    </SafeAreaView>
  )
}

export default Index