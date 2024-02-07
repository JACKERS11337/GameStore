import { Header } from "./widgets/header";
import { Card } from "./components/card";
import cardsData from "../src/data/cards.json";

function App() {
  return (
    <>
      <Header />

      <Card card={cardsData} />
    </>
  );
}

export default App;
