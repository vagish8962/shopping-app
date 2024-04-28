import React from "react";
import { useShoppingCartDetail } from "../context/shoppingCartContext";
import updatedCartList from "../utils/updatedCartList";
import OfferAppliedLabel from "./OfferAppliedLabel";

function Cart() {
  const { productsInCart, showCart } = useShoppingCartDetail();
  const { updatedItems, totalCartCost } = updatedCartList(productsInCart);

  return (
    <div className="cart-container">
      {
        showCart &&  <main class="w-screen h-screen grid grid-flow-col place-items-center group">
        <section class="border absolute transition-all duration-500 -right-0 group-hover:right-0 top-24">
          <h3 className="d-flex justify-content-center">Cart</h3>
              {updatedItems.length ? (
                <div className="item-container">
                  <ul>
                    <li>
                      {updatedItems.map((item) => (
                        <div key={item.id}>
                          <h3 className="bold">{item.name}</h3>
                          <h4>
                            <OfferAppliedLabel
                              offer={item.offerAvailable}
                              quantity={item.quantity}
                            />
                            {`${item.quantity}Q x ${item.cost}p`}
                          </h4>
                          <b>{item.totalCost}p</b>
                        </div>
                      ))}
                    </li>
                  </ul>
                  <div className="cart-total">Total Cart cost : {totalCartCost}p</div>
                </div>
              ) : (
                <div className="cart-empty">Cart is empty !</div>
              )}  
        </section>
      </main>
      }
     

    </div>
  );
};

export default Cart;
