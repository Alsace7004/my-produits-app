import { deleteProduct } from "@/lib/appwrite";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from 'react';
import { Alert, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Produit = ({produits})=>{
    const [modalVisible,setModalVisible] = useState(false);

    const handleDelete = (productId)=>{
        destroyProduct(productId)
        setModalVisible(false)
    }

    const destroyProduct = async(productId)=>{
        try {
            const result = await deleteProduct(productId);
            if(result.status){
                Alert.alert('Réussi','Produit supprimé avec succès');
             
            }
        } catch (error) {
            Alert.alert('Erreur',"Une erreur survenue lors de la suppression du produit, s'il vous plaît,veiller reessayer.")
        }
    }

    return (
        <Link
            href={{pathname:`/product/${produits.id}`,params:{
                id:produits.id,
                title:produits.title,
                price:produits.price,
                description:produits.description,
                category:produits.category,
                image:produits.image,
                rating:produits.rating,
            }}}
            asChild
        >
            <TouchableOpacity activeOpacity={0.8} className="bg-white rounded-lg overflow-hidden shadow-md mb-3 w-[47%]">
                    <Image
                        source={{uri:produits.image}}
                        className="h-32 w-full object-cover"
                    />
                    <View className="p-3">
                            {/* Category */}
                            <View className="flex-row justify-between items-center">   
                                <Text className="text-gray-500  text-xs">{produits?.category}</Text>
                            </View>
                            {/* Title */}
                            <Text className="text-md font-semibold mt-2" numberOfLines={1}> {produits?.title}</Text>
                            {/* Prix */}
                            <View className='flex-row justify-between items-center mt-2'>
                                {produits && (
                                    <Text className="text-secondary text-xs font-semibold">{(produits?.price)} XOF</Text>
                                )}
                                                            
                                                  
                                <View style={styles.container}>
                                    {/* Delete Icon */}
                                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                                        <Ionicons name="trash" size={18} color="red" />
                                    </TouchableOpacity>
                            
                                    {/* Modal Popup */}
                                    <Modal
                                        transparent={true}
                                        visible={modalVisible}
                                        onRequestClose={() => setModalVisible(false)}
                                    >
                                        <View style={styles.modalOverlay}>
                                            <View style={styles.modalContent}>
                                                <Text style={styles.modalText} className="font-semibold">Voulez-vous vraiment supprimer ce produit ?</Text>
                                                <View style={styles.buttonRow}>
                                                    <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                                                        <Text style={styles.cancelText} className="font-semibold">Annuler</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.deleteButton} onPress={()=>handleDelete(produits?.id)}>
                                                        <Text style={styles.deleteText} className="font-semibold">Supprimer</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </Modal>
                                </View>
                                                        
                            </View>
                    </View>
            </TouchableOpacity>
        
        </Link>
    );
}

const styles = StyleSheet.create({
    container: {
     
    },
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: 300,
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      elevation: 10,
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      fontSize: 16,
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cancelButton: {
      backgroundColor: '#ccc',
      padding: 10,
      borderRadius: 5,
      flex: 1,
      marginRight: 5,
    },
    deleteButton: {
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 5,
      flex: 1,
      marginLeft: 5,
    },
    cancelText: {
      textAlign: 'center',
      color: 'black',
    },
    deleteText: {
      textAlign: 'center',
      color: 'white',
    },
  });

export default Produit;