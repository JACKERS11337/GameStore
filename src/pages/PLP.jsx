import { Product } from "../components/card";
import { Filter } from "../components/filter";
import cardsData from "../data/cards.json";

export const PLP = () => {
  return (
    <div style={{ display: "flex" }}>
      <Filter />
      <Product product={cardsData[0]} />
    </div>
  );
};
