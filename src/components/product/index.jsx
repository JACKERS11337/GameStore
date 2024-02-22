/* eslint-disable react/prop-types */
import "./style.scss";
import { FaStar } from "react-icons/fa";
import { CartContext } from "../../context/cart";
import { useContext, useState } from "react";

export const Product = ({ ...product }) => {
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  const handleAddCart = (product) => {
    setLoading(true);
    setTimeout(() => {
      addToCart(product);
      setLoading(false);
    }, 1000);
  };

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
        <p className="description-product">{product.description}</p>
        <button onClick={() => handleAddCart(product)}>
          {product.price} $
          {loading ? (
            <span>
              <img src="/loader.svg" alt="loading..." />
            </span>
          ) : (
            <span>Add to cart</span>
          )}
        </button>
      </div>
    </div>
  );
};
