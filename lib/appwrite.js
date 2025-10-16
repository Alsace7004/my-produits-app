import axiosClient from "../axios";



export const getProducts = async ()=>{
    try {
        const data = await axiosClient.get('/products');
        console.log('valeur de data dans getProducts:',JSON.stringify(data,null,2))
    } catch (error) {
        console.log('valeur de error dans getProducts :',error)
    }
}