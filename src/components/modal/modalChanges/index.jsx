import React from "react";
import { useRef } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import "./style.scss";

export const ModalChanges = ({ children, onClose }) => {
  const modalRef = useRef();

  useOnClickOutside(modalRef, function () {
    onClose(false);
  });

  return (
    <div className="change-modal">
      <div className="change-content-wrapper" ref={modalRef}>
        {children}
      </div>
    </div>
  );
};
