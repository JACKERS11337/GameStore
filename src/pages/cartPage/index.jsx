import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cart";
import "./style.scss";

export const CartPage = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  return (
    <div className="cart-background">
      <div className="cart-container">
        <p>Cart</p>
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <div>
                  <p>{item.name}</p>
                  <p>{item.price}$</p>
                </div>
                <div>
                  <button onClick={() => removeFromCart(item)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length > 0 ? (
          <div className="price">
            <div>
              <span>Total: ${getCartTotal()}</span>
              <button>Buy</button>
            </div>
            <small
              onClick={() => {
                clearCart();
              }}
            >
              Clear cart
            </small>
          </div>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};
