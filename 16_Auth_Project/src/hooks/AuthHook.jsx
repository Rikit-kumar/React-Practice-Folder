import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { MyStore } from "../contextApi/AppContext";

export const AuthHook = () => {
  const navigate = useNavigate();
  const { setRegisterUser, registerUser, loggedInUser, setLoggedInUser } =
    useContext(MyStore);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const registerHandleSubmit = (data) => {
    let existedRegisterUser = registerUser.find(
      (val) => val.email === data.email,
    );

    if (existedRegisterUser) {
      toast.error("User Already Existed");
      reset();
      return;
    }

    const updatedUser = [...registerUser, data];
    setRegisterUser(updatedUser);
    localStorage.setItem("registeredUsers", JSON.stringify(updatedUser));
    reset();
    toast.success("User Register Successfully");
    navigate("/");
  };

  const loginHandleSubmit = (data) => {
    let registeredUser =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    const loginUser = registeredUser.find(
      (val) => val.email === data.email && val.password === data.password
    );

    if (!loginUser) {
      toast.error("Invalid Email or Password");
      reset();
      return;
    }

    setLoggedInUser(loginUser);
    localStorage.setItem("loggedInUser", JSON.stringify(loginUser));

    reset();
    toast.success("User Login Successfully");
    navigate("/main");
  };

  return {
    navigate,
    handleSubmit,
    register,
    reset,
    errors,
    registerHandleSubmit,
    loginHandleSubmit,
  };
};
