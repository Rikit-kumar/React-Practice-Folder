import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const MyApp = createContext();

export const ContextProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [wishListItems, setWishListItems] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});
  console.log(singleProduct);

  const addToCartFnc = (data, quantity = 1) => {
    setCartItems((prev) => {
      const existedProduct = prev.find((item) => item.id === data.id);
      if (existedProduct) {
        return prev.map((item) =>
          item.id === data.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      return [...prev, { ...data, quantity: quantity }];
    });

    toast.success("Your selection has been added to cart");
  };

  const addToWishListFnc = (data) => {
    setWishListItems((prev) => [...prev, data]);
    toast.success("Saved to your wishlist");
  };

  const incrementQuantity = (id) => {
    setCartItems((prev) => {
      return prev.map((val) => {
        return val.id === id ? { ...val, quantity: val.quantity + 1 } : val;
      });
    });
  };

  const decrementQuantity = (id) => {
    setCartItems((prev) => {
      return prev
        .map((val) =>
          val.id === id ? { ...val, quantity: val.quantity - 1 } : val,
        )
        .filter((val) => val.quantity > 0);
    });
  };

  const deleteProductsFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const deleteProductFromWishlist = (id) => {
    setWishListItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <MyApp.Provider
      value={{
        allProducts,
        setAllProducts,
        cartItems,
        setCartItems,
        addToCartFnc,
        incrementQuantity,
        decrementQuantity,
        wishListItems,
        setWishListItems,
        addToWishListFnc,
        deleteProductsFromCart,
        deleteProductFromWishlist,
        setSingleProduct,
        singleProduct,
      }}
    >
      {children}
    </MyApp.Provider>
  );
};
