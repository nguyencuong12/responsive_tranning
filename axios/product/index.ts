import axios from "../axios.interceptor";
let url = "/products";
export const ProductAPI = {
  getProduct() {
    return axios({
      method: "GET",
      url: url,
    });
  },
  getHotProducts() {
    return axios({
      method: "POST",
      url: url + "/hot",
    });
  },
  getBestSaleProducts() {
    return axios({
      method: "POST",
      url: url + "/best-sale",
    });
  },
};
