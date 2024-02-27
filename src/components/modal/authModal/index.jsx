import { createPortal } from "react-dom";
import { useRef } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import "./style.scss";

export const Modal = ({ children, onClose }) => {
  const modalRef = useRef();

  useOnClickOutside(modalRef, function () {
    onClose(false);
  });

  return createPortal(
    <div className="modal">
      <div className="modal-content-wrapper" ref={modalRef}>
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
};
