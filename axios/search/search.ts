

import axios from '../axios.interceptor';
const url = "/search";
export const SearchAPI = {
    excuteSearch:(searchField:string)=>{
        return axios({
            url: url,
            method: "GET",
            params: { searchField },
          });
    }

}