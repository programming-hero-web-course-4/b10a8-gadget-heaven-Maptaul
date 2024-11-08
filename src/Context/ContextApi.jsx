import { createContext, useState } from "react";

export const Context = createContext();
const ContextApi = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  return (
    <Context.Provider
      value={{ products, setProducts, cart, setCart, wishlist, setWishlist }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextApi;
