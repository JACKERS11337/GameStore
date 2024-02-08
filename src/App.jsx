import { Header } from "./widgets/header";
import { Product } from "./components/card";
import cardsData from "../src/data/cards.json";

function App() {
  return (
    <>
      <Header />
      <Product product={cardsData[0]} />
    </>
  );
}

export default App;
