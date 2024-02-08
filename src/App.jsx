import { Header } from "./widgets/header";
import { Product } from "./components/card";
import { Filter } from "./components/filter";
import cardsData from "../src/data/cards.json";

function App() {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Product product={cardsData[0]} />
        <Filter />
      </div>
    </>
  );
}

export default App;
