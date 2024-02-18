import { PLP } from "./pages/plp";
import { Routes, Route } from "react-router-dom";
import { CartPage } from "./pages/cartPage";
import { Header } from "./widgets/header";
import { News } from "./pages/news";
import { Profile } from "./pages/profile";
import userData from "./data/user.json";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PLP />} />
        <Route path="/news" element={<News />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<Profile {...userData[0]} />} />
      </Routes>
    </>
  );
}

export default App;
