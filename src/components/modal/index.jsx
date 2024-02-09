import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";
import useClickOutside from "../../hooks/useClickOutside";

export const Modal = ({ children, openModal, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    if (openModal) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [openModal]);

  useClickOutside(modalRef, () => {
    if (!openModal) onClose(false);
  });

  console.log(modalRef);
  console.log(openModal);

  return createPortal(
    <dialog
      ref={modalRef}
      style={{
        margin: "100px auto ",
        width: "700px",
        height: "500px",
        zIndex: "999999999",
        overflow: "hidden",
      }}
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};
