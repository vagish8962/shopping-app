import React, { useState } from "react";
import { useShoppingCartDetail } from "../context/shoppingCartContext";
import Product from './Product';
import products from "../mockData/products.json";


function Products() {
  const { productsInCart, setProductsInCart, setShowCart, showCart } = useShoppingCartDetail();

  const handleAddToCart = (item) => {
    const updatedShoppingCart = [...productsInCart, item];
    setProductsInCart(updatedShoppingCart);
  };

  return (
    <section>
      <div className="grid grid-cols-12">
        <h2 className="text-4xl font-bold text-center mt-10 col-span-11">Products</h2>
        <div className= "col-span-1 relative" onClick={() => setShowCart(!showCart)}>
          <img  src="https://upload.wikimedia.org/wikipedia/commons/4/43/ECommerce_WooCommerce_Cart.png" />
          <b className="absolute bottom-[14px] right-[30px]">{productsInCart.length}</b>
        </div>
      </div>
      <div className="product-list">
        {products?.data?.map((item) => (
          <Product item={item} handleAddToCart={handleAddToCart}/>
        ))}
      </div>

    </section>
  );
};

export default Products;
