import React from "react";
import { ShoppingCartContextProvider } from '../context/shoppingCartContext'
import Cart from "../components/Cart";
import Products from "../components/Products";
import "../styles/shopping.css";

function Shopping() {
  return (
      <ShoppingCartContextProvider>
        <Products />
        <Cart />
      </ShoppingCartContextProvider>
  );
};

export default Shopping;
