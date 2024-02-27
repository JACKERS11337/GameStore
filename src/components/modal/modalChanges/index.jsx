import React from "react";
import { useRef } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import "./style.scss";
import { createPortal } from "react-dom";

export const ModalChanges = ({ children, onClose }) => {
  const modalRef = useRef();

  useOnClickOutside(modalRef, function () {
    onClose(false);
  });

  return createPortal(
    <div className="change-modal">
      <div className="change-content-wrapper" ref={modalRef}>
        {children}
      </div>
    </div>,
    document.getElementById("changes-modal")
  );
};
