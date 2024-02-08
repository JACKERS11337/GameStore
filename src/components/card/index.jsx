import "./style.scss";
import { FaStar } from "react-icons/fa";

export const Product = ({ product }) => {
  return (
    <div className="product-container">
      <div className="content">
        <img src={product.image} alt="product" className="image-product" />
        <div className="name-product">{product.name}</div>
        <div className="rating-product">
          <div>
            {[...Array(5)].map((star, index) => (
              <FaStar
                key={product.id}
                className={index < product.rating ? "star active" : "star"}
              />
            ))}
          </div>
          <p>{product.rating}/5 stars</p>
        </div>
        <div className="description-product">{product.description}</div>
        <button>
          {product.price} <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};
