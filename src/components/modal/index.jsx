import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import "./style.scss";

export const Modal = ({ children, openModal, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    if (openModal) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [openModal]);

  useClickOutside(modalRef, function () {
    if (openModal) onClose(false);
  });

  return createPortal(
    <dialog ref={modalRef}>{children}</dialog>,
    document.getElementById("modal")
  );
};
