import "./style.scss";
import logo from "/logo.png";
import { Modal } from "../../components/modal";
import { AuthModalBody } from "../../components/modal/modalContent";
import { useState } from "react";

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
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <nav>
          <ul>
            <li>
              <a href="#">SHOP</a>
            </li>
            <li>
              <a href="#">COMMUNITY</a>
            </li>
            <li>
              <a href="#">PROFILE</a>
            </li>
            <li>
              <a href="#">CHAT</a>
            </li>
            <li>
              <a href="#">SUPPORT</a>
            </li>
          </ul>
        </nav>
        <div>
          <button onClick={onOpen}>Sing in</button>
          <button onClick={onOpen}>Register</button>
        </div>
        <div className="mobile-hamb">
          <span></span>
        </div>
      </div>

      {openModal && (
        <Modal openModal={openModal} onClose={onClose}>
          <AuthModalBody />
        </Modal>
      )}
    </header>
  );
};
