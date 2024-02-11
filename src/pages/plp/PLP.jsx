import { Header } from "../../widgets/header/index";
import { Product } from "../../components/product";
import { Filter } from "../../components/filter";
import productsData from "../../data/products.json";
import "./PLP.scss";

export const PLP = () => {
  return (
    <>
      <Header />
      <div className="plp-content">
        <div className="plp-container">
          <Filter />

          <div className="plp-product">
            {productsData.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
