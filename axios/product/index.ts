import axios from "../axios.interceptor";
let url = "/products";
export const ProductAPI = {
  getProduct() {
    return axios({
      method: "GET",
      url: url,
    });
  },
  getProductFromID(id: string) {
    return axios({
      method: "GET",
      url: url + `/${id}`,
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
