import { PLP } from "./pages/plp";
import { Routes, Route } from "react-router-dom";
import { Cart } from "./pages/cart";
import { Header } from "./widgets/header";
import { News } from "./pages/news";
import { Profile } from "./pages/profile";
import { Chat } from "./pages/chat";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PLP />} />
        <Route path="/news" element={<News />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
