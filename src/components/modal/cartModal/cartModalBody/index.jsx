import React, { useState } from "react";
import "./style.scss";
import creditCardData from "../../../../data/credit-card.json";
import { IoMdClose } from "react-icons/io";

export const CartModalBody = ({
  cartItems,
  getCartTotal,
  onClose,
  clearCart,
}) => {
  const [loading, setLoading] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardValidity, setCardValidity] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  function buyProduct() {
    const error = document.querySelector(".error");
    if (cardNumber === "" || cardValidity === "" || cardCvv === "") {
      error.style.display = "block";
    } else {
      setLoading(true);
      error.style.display = "none";
      setTimeout(() => {
        onClose();
        clearCart();
        setLoading(false);
      }, 1000);
    }
  }

  return (
    <div className="cart-modal-content">
      <div className="cart-modal-form">
        <div>
          <img src="/credit-card.svg" alt="credit-card" />{" "}
          <span>Credit card</span>
        </div>
        <div className="card-info">
          <p>Card information</p>
          <div>
            {creditCardData.map((card) => (
              <img key={card.id} src={card.image} alt="" />
            ))}
          </div>
        </div>
        <form action="">
          <p className="error"> All fields required!</p>
          <div className="card-number">
            <label htmlFor="card-number">Card number</label>
            <input
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              id="card-number"
              type="text"
              placeholder="Card number"
            />
          </div>
          <div>
            <div>
              <label htmlFor="validity">Validity</label>
              <input
                value={cardValidity}
                onChange={(e) => setCardValidity(e.target.value)}
                id="validity"
                type="text"
                placeholder="Validity"
              />
            </div>
            <div>
              <label htmlFor="cvv">CVV</label>
              <input
                value={cardCvv}
                onChange={(e) => setCardCvv(e.target.value)}
                id="cvv"
                type="text"
                placeholder="CVV"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="cart-modal-description">
        <IoMdClose className="close" onClick={onClose} />
        <h2>Order description</h2>
        {cartItems.map((product) => (
          <div key={product.id} className="description">
            <div>
              <img src={product.image} alt="product" />
              <div>
                <p>{product.name}</p>
                <p>
                  Prise:<span>{product.price}$</span>
                </p>
              </div>
            </div>
          </div>
        ))}
        <p>
          Total price: <span>{getCartTotal()}$</span>
        </p>
        <button onClick={buyProduct}>
          {loading ? (
            <span>
              <img src="/loader.svg" alt="loading..." />
            </span>
          ) : (
            <span>Place an order</span>
          )}
        </button>
      </div>
    </div>
  );
};
