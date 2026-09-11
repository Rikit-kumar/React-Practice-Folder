import { Children, createContext, useState } from "react";
import { toast } from "react-toastify";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [registerUser, setRegisterUser] = useState(() => {
    const storedRegisterUser = localStorage.getItem("registeredUsers");
    return storedRegisterUser ? JSON.parse(storedRegisterUser) : [];
  });

  const [loggedInUser, setLoggedInUser] = useState(() => {
    const storedLoggedInUser = localStorage.getItem("loggedInUser");
    return storedLoggedInUser ? JSON.parse(storedLoggedInUser) : null;
  });

  const [allProductsData, setAllProductsData] = useState([]);
  const [allUserData, setAllUserData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [wishListItems, setWishListItems] = useState([]);

  const addTOCartFnc = (data) => {
    setCartItems((prev) => [...prev, { ...data, quantity: 1 }]);
    toast.success("Added to your cart");
  };
  
  const addToWishlistFnc = (data)=>{
    setWishListItems((prev)=> [...prev, data]);
    toast.success("Saved to your wishlist")
  }

  const incrementQuantityFnc = (id) => {
    setCartItems((prev) => {
      return prev.map((val) => {
        return val.id === id ? { ...val, quantity: val.quantity + 1 } : val;
      });
    });
  };

  const decrementQuantityFnc = (id) => {
    setCartItems((prev) => {
      return prev
        .map((val) =>
          val.id === id ? { ...val, quantity: val.quantity - 1 } : val,
        )
        .filter((val) => val.quantity > 0);
    });
  };

  return (
    <MyStore.Provider
      value={{
        registerUser,
        setRegisterUser,
        loggedInUser,
        setLoggedInUser,
        allProductsData,
        setAllProductsData,
        allUserData,
        setAllUserData,
        cartItems,
        setCartItems,
        wishListItems,
        setWishListItems,

        addTOCartFnc,
        incrementQuantityFnc,
        decrementQuantityFnc,
        addToWishlistFnc
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
