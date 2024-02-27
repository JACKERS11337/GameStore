import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/cart.jsx";
import { UserProvider } from "./context/user.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </UserProvider>
);
