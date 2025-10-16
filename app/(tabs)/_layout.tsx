import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabsLayout = ()=>{
    return (
        <Tabs screenOptions={{headerShown:false}}>
            <Tabs.Screen name="index" options={{title:"Produits",tabBarIcon:({color})=>(
                <Ionicons name='home' size={24} color={color}/>
            )}}/>
            <Tabs.Screen name='add' options={{title:"Ajouter",tabBarIcon:({color})=>(
                <Ionicons name='add' size={24} color={color}/>
            )}}/>
            <Tabs.Screen name='cart' options={{title:"Panier",tabBarIcon:({color})=>(
                <Ionicons name='cart' size={24} color={color}/>
            )}}/>
        </Tabs>
    );
}


export default TabsLayout;