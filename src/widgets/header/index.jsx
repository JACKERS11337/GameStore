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
  const [burger, setBurger] = useState(true);

  function onOpen() {
    document.body.style.overflow = "hidden";
    setOpenModal(true);
  }

  function onClose() {
    document.body.style.overflow = "unset";
    setOpenModal(false);
  }

  function closeBurger(burger) {
    burger === false
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
    setBurger(burger);
  }

  return (
    <header>
      <div className="container">
        <div className="header-logo">
          <Link onClick={() => setBurger(true)} to="/">
            <img src={logo} alt="logo" />
            <span className="logo">GAME-STORE</span>
          </Link>
        </div>

        <nav className={burger ? "active" : ""}>
          <ul>
            <li>
              <Link onClick={() => setBurger(true)} to="/">
                SHOP
              </Link>
            </li>
            <li>
              <Link onClick={() => setBurger(true)} to="/news">
                NEWS
              </Link>
            </li>
            {user.avatar && (
              <li>
                <Link onClick={() => setBurger(true)} to="/profile">
                  PROFILE
                </Link>
              </li>
            )}
            {user.avatar && (
              <li>
                <Link onClick={() => setBurger(true)} to="/chat">
                  CHAT
                </Link>
              </li>
            )}
            <li style={{ color: "#fff" }}>
              <Link onClick={() => setBurger(true)} to="/cart">
                <FaCartShopping />
                <span>{cartItems.length}</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="btn-sing">
          {!user.avatar && (
            <div className="header-btn">
              <button onClick={onOpen}>Sing-in</button>
              <button onClick={onOpen}>Sing-up</button>
            </div>
          )}

          {user.avatar && (
            <div className="header-btn">
              <button onClick={() => exitUser()}>Exit</button>
            </div>
          )}

          <div onClick={() => closeBurger(!burger)} className="mobile-hamb ">
            <span></span>
          </div>
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
