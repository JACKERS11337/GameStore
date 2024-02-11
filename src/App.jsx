import { PLP } from "./pages/plp/PLP";
import { Routes, Route } from "react-router-dom";
import { CartPage } from "./pages/cart page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PLP />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
