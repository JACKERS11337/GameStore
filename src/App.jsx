import { Header } from "./widgets/header";
import { Product } from "./components/card";
import cardsData from "../src/data/cards.json";
import { Modal } from "./components/modal/item";

function App() {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Product product={cardsData[0]} />
        <Modal />
      </div>
    </>
  );
}

export default App;
