import { PLP } from "./pages/plp";
import { Routes, Route } from "react-router-dom";
import { CartPage } from "./pages/cartPage";
import { Header } from "./widgets/header";
import { News } from "./pages/news";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PLP />} />
        <Route path="/news" element={<News />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
