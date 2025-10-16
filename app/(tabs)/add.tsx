import CustomButton from '@/components/CustomButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { Alert, ScrollView, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from "../../components/FormField"

const Add = () => {
    const [form,setForm] = useState({
      title:"",
      prix:"",
      description:"",
    })
    const submit = async()=>{
            const myProduct = {
                title: form.title,
                prix: form.prix,
                description: form.description,
            };
            console.log('valeur de myProduct :',myProduct)
            try {
                const jsonValue = JSON.stringify(myProduct);
                await AsyncStorage.setItem('data', jsonValue);
                Alert.alert('Message','Produit Ajouté le produit');
               
            } catch (e) {
                console.error('Error storing object:', e);
            }
    }
  return (
    <SafeAreaView className="h-full">
      <ScrollView className="px-4 my-6">
        <Text className="text-2xl text-black ">
            Ajouter un produit
        </Text>

        <FormField 
          title="Libelle du produit" 
          value={form.title}
          placeholder=""
          handleTextChange={(e)=>setForm({...form,title:e})}
          otherStyles="mt-10"
        />

        <FormField 
          title="Prix du produit" 
          value={form.prix}
          placeholder="EX : 1500"
          handleTextChange={(e)=>setForm({...form,prix:e})}
          otherStyles="mt-7"
        />
        
        <FormField 
          title="Description" 
          value={form.description}
          placeholder=""
          handleTextChange={(e)=>setForm({...form,description:e})}
          otherStyles="mt-7"
        />
 
        <CustomButton
            title="Enregistrer"
            constainerStyles="mt-7"
            handlePress={submit}
        />    
      </ScrollView>

    </SafeAreaView>
  )
}

export default Add