import "./style.scss";
import logo from "/logo.png";
import { Modal } from "../../components/modal";
import { useState, useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";

export const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef();
  useClickOutside(modalRef, () => {
    if (openModal) setOpenModal(false);
  });
  console.log(openModal);
  console.log(modalRef);

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
          <button onClick={() => setOpenModal(true)}>Sing in</button>
          <button onClick={() => setOpenModal(true)}>Register</button>
        </div>
        <div className="mobile-hamb">
          <span></span>
        </div>
      </div>
      <Modal ref={modalRef} open={openModal} />
    </header>
  );
};
