import FectApi from "./FectApi";

const ProductService = {
  getAllProduct() {
    return FectApi.get("/product");
  },

  getProduct(id) {
    return FectApi.get(`/product/${id}`);
  },
};

export default ProductService;
