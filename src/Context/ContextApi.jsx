import { createContext, useState } from "react";

export const Context = createContext();
const ContextApi = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);

  return (
    <Context.Provider
      value={{ products, setProducts, cart, setCart, wishList, setWishList }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextApi;
