import CustomButton from '@/components/CustomButton'
import React, { useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from "../../components/FormField"

const Add = () => {
    const [form,setForm] = useState({
      title:"",
      prix:"",
      description:"",
    })
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
        />    
      </ScrollView>

    </SafeAreaView>
  )
}

export default Add