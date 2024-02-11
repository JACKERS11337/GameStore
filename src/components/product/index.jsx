/* eslint-disable react/prop-types */
import "./style.scss";
import { FaStar } from "react-icons/fa";
import { CartContext } from "../../context/cart";
import { useContext } from "react";

export const Product = ({ ...product }) => {
  const { cartItems, addToCart } = useContext(CartContext);
  return (
    <div className="product-container">
      <div>
        <img src={product.image} alt="product" />
      </div>
      <div className="content">
        <div className="name-product">{product.name}</div>
        <div className="rating-product">
          <div>
            {[...Array(5)].map((star, index) => (
              <FaStar
                key={`${product.id}-ratingStar-${index}`}
                className={index < product.rating ? "star active" : "star"}
              />
            ))}
          </div>
          <p>{product.rating}/5 stars</p>
        </div>
        <div className="description-product">{product.description}</div>
        <button onClick={() => addToCart(product)}>
          {product.price}$ <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};
