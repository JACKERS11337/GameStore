import { PLP } from "./pages/plp";
import { Routes, Route } from "react-router-dom";
import { CartPage } from "./pages/cartPage";

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
