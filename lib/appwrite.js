import axiosClient from "../axios";



export const getAllProducts = async ()=>{
    try {
        const response = await axiosClient.get('/products');
        console.log('valeur de response dans getProducts:',JSON.stringify(response.data,null,2))
        //console.log('valeur de response.data dans getProducts:',JSON.stringify(response.data,null,2))
        return response.data;
    } catch (error) {
        console.log('valeur de error dans getProducts :',error)
    }
}

export const deleteProduct = (productId)=>{

}