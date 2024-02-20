import { Product } from "../../components/product";
import { Filter } from "../../components/filter";
import productsData from "../../data/products.json";
import "./style.scss";
import { useState } from "react";

export const PLP = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsProdPage = 15;
  const lastIndex = currentPage * recordsProdPage;
  const firstIndex = lastIndex - recordsProdPage;
  const quantityProducts = productsData.slice(firstIndex, lastIndex);
  const quantityPage = Math.ceil(productsData.length / recordsProdPage);

  function prePage() {
    currentPage !== 1 ? setCurrentPage(currentPage - 1) : "";
  }

  function nextPage() {
    currentPage !== quantityPage ? setCurrentPage(currentPage + 1) : "";
  }

  return (
    <div className="plp">
      <div className="plp-container">
        <Filter />
        <div className="plp-content">
          <div className="plp-product">
            {quantityProducts.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </div>
          <nav>
            <ul className="pagination">
              <li className="page-item">
                <button onClick={prePage}>Prev</button>
              </li>

              <p style={{ color: "#fff" }}>{currentPage}</p>

              <li className="page-item">
                <button onClick={nextPage}>Next</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
