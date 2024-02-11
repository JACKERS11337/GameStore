import "./style.scss";
import logo from "/logo.png";
import { Modal } from "../../components/modal";
import { AuthModalBody } from "../../components/modal/authModalBody";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
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
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/">SHOP</Link>
            </li>
            <li>
              <Link to="/community">COMMUNITY</Link>
            </li>
            <li>
              <Link to="/profile">PROFILE</Link>
            </li>
            <li>
              <Link to="/chat">CHAT</Link>
            </li>
            <li>
              <Link to="/support">SUPPORT</Link>
            </li>
          </ul>
        </nav>
        <div>
          <button onClick={onOpen}>Sing-in</button>
          <button onClick={onOpen}>Sing-up</button>
        </div>
        <div className="mobile-hamb">
          <span></span>
        </div>
      </div>

      {openModal && (
        <Modal openModal={openModal} onClose={onClose}>
          <AuthModalBody onClose={onClose} />
        </Modal>
      )}
    </header>
  );
};
