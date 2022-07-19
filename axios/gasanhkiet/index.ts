


import axios from '../axios.interceptor';
const url = "/products"
export const GasAnhKietAPI = {
    fetchAllProductsInStore:()=>{
        return axios({
            method:'GET',
            url:url
        })
      
    },
    fetchGasAnhKiet:async ()=>{
        return axios({
            method:'POST',
            url:url+"/gas-anhkiet"
        })
    },
    fetchBepGas:async ()=>{
        return axios({
            method:'POST',
            url:url+"/bep-gas"
        })
    },
    fetchDayGas:async ()=>{
        return axios({
            method:'POST',
            url:url+"/day-gas"
        })
    }
    
}