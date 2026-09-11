import { createContext, useState } from "react";

export const MyStore = createContext();

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  console.log(cartItem);

  return (
    <MyStore.Provider
      value={{ cartItem, setCartItem, isCartOpen, setIsCartOpen }}
    >
      {children}
    </MyStore.Provider>
  );
};
