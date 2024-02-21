import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cart";
import "./style.scss";
import { ModalCart } from "../../components/modal/cartModal";
import { CartModalBody } from "../../components/modal/cartModal/cartModalBody";

export const Cart = () => {
  const { cartItems, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  const [openModal, setOpenModal] = useState(false);

  function onOpen() {
    document.body.style.overflow = "hidden";
    setOpenModal(true);
  }
  function onClose() {
    document.body.style.overflow = "unset";
    setOpenModal(false);
  }

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
              <button onClick={onOpen}>Buy</button>
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

      {openModal && (
        <ModalCart onClose={onClose}>
          <CartModalBody
            cartItems={cartItems}
            getCartTotal={getCartTotal}
            onClose={onClose}
            clearCart={clearCart}
            setOpenModal={setOpenModal}
          />
        </ModalCart>
      )}
    </div>
  );
};
