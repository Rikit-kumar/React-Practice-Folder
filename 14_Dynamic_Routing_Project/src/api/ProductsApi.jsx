import axios from "axios";
import { MyApp } from "../contextApi/AppContext";

export const getAllProductsData = async () => {
  try {
    const AllProductApiResponse = await axios.get(
      "https://dummyjson.com/products",
    );

    return AllProductApiResponse.data.products;
  } catch (error) {
    console.log("All Products Api Error", error);
  }
};
