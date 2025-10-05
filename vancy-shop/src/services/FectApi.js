import axios from "axios";
const FectApi = axios.create({
  baseURL: `http://api.nguyenlieuvancy.shop/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default FectApi;
