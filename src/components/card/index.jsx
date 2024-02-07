import "./styled.scss";
import { FaStar } from "react-icons/fa";

export const Card = ({ card }) => {
  console.log(card[0].rating);
  return (
    <div className="containerr">
      <div className="content">
        <img src={card[0].image} alt="game" className="image" />
        <div className="name">{card[0].name}</div>
        <div className="rating">
          <div>
            {[...Array(5)].map((star, index) => (
              <FaStar
                key={card[0].id}
                className={index < card[0].rating ? "star active" : "star"}
              />
            ))}
          </div>
          <p>{card[0].rating}/5 stars</p>
        </div>
        <div className="description">{card[0].description}</div>

        <button>
          {card[0].price} <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};
