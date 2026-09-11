import axios from "axios";

export const getSingleProductDetail = async (id) => {
  try {
    let singleProductDetail = await axios.get(`https://dummyjson.com/products/${id}`)
    return singleProductDetail.data;
  } catch (error) {
    console.log('Single Product Api Error', error)
  }
};
