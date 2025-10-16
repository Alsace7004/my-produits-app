
import axios from "axios";
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const axiosClient= axios.create({
    baseURL:apiUrl,
    headers:{
       Accept: 'application/json',
        "Content-Type":"application/json"
    }
})

console.log('valeur de apiUrl:',apiUrl)

export default axiosClient;