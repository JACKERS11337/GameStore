import "./style.scss";
import logo from "/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { Modal } from "../../components/modal/authModal";
import { AuthModalBody } from "../../components/modal/authModal/authModalBody";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart";
import { UserContext } from "../../context/user";

export const Header = () => {
  const { user, exitUser } = useContext(UserContext);

  const { cartItems } = useContext(CartContext);
  const [openModal, setOpenModal] = useState(false);

  function onOpen() {
    document.body.style.overflow = "hidden";
    setOpenModal(true);
  }
  function onClose() {
    document.body.style.overflow = "unset";
    setOpenModal(false);
  }

  return (
    <header>
      <div className="container">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
            <span>GAME-STORE</span>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">SHOP</Link>
            </li>
            <li>
              <Link to="/news">NEWS</Link>
            </li>
            {user.avatar && (
              <li>
                <Link to="/profile">PROFILE</Link>
              </li>
            )}
            {user.avatar && (
              <li>
                <Link to="/chat">CHAT</Link>
              </li>
            )}
            <li style={{ color: "#fff" }}>
              <Link to="/cart">
                <FaCartShopping />
                <span>{cartItems.length}</span>
              </Link>
            </li>
          </ul>
        </nav>

        {!user.avatar && (
          <div>
            <button onClick={onOpen}>Sing-in</button>
            <button onClick={onOpen}>Sing-up</button>
          </div>
        )}

        {user.avatar && (
          <div>
            <button onClick={() => exitUser()}>Exit</button>
          </div>
        )}

        <div className="mobile-hamb">
          <span></span>
        </div>
      </div>

      {openModal && (
        <Modal onClose={onClose}>
          <AuthModalBody onClose={onClose} />
        </Modal>
      )}
    </header>
  );
};
