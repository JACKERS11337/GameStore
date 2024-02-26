import React from "react";
import { useRef } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import "./style.scss";
import { createPortal } from "react-dom";

export const NewsModal = ({ children, onClose }) => {
  const newsRef = useRef();

  useOnClickOutside(newsRef, function () {
    onClose(-1);
  });

  return createPortal(
    <div className="news-modal-wrapper">
      <div className="news-content-wrapper" ref={newsRef}>
        {children}
      </div>
    </div>,
    document.getElementById("news-modal")
  );
};
