import { axiosInstance } from '../config/axiosInstance';

export const getAllProductsData = async () => {
  try {
    let getProducts = await axiosInstance.get("/products?limit=50");
    return getProducts.data.products;
  } catch (error) {
    console.log("Error in products Api", error);
  }
};
