import React from "react";
import { Header } from "../../widgets/header";
import { useContext } from "react";
import { CartContext } from "../../context/cart";
import "./style.scss";

export const CartPage = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  return (
    <>
      <Header />
      <div className="cart-background">
        <div className="cart-container">
          <h1>Cart</h1>
          <div>
            {cartItems.map((item) => (
              <div key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>{item.price}$</p>
                </div>
              </div>
            ))}
          </div>
          {cartItems.length > 0 ? (
            <div>
              <p>Total: ${getCartTotal()}</p>
              <button
                onClick={() => {
                  clearCart();
                }}
              >
                Clear cart
              </button>
            </div>
          ) : (
            <h1>Your cart is empty</h1>
          )}
        </div>
      </div>
    </>
  );
};
