import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  const incrementQuantity = (id) => {
    setCartItem((prev) => {
      return prev.map((val) => {
        return val.id === id ? { ...val, quantity: val.quantity + 1 } : val;
      });
    });
  };

  const decrementQuantity = (id) => {
    setCartItem((prev) => {
      return prev
        .map((val) => {
          if (val.id === id) {
            return { ...val, quantity: val.quantity - 1 };
          }
          return val;
        })
        .filter((val) => val.quantity > 0);
    });
  };

  const removeCartItem = (id)=>{
    setCartItem(cartItem.filter(item => item.id !== id) )
  }

  return (
    <MyStore.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        products,
        setProducts,
        cartItem,
        setCartItem,
        incrementQuantity,
        decrementQuantity,
        removeCartItem,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
