import { axiosInstance } from "../config/axiosInstance";

export const getAllUsersData = async () => {
  try {
    const userData = await axiosInstance.get("/users");
    return userData.data.users;
  } catch (error) {
    console.log("User Api Error", error);
  }
};
