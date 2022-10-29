import ReactDOM from "react-dom";
import { useEffect } from "react";
import styles from "./Modal.module.scss";
import { escape, body } from "../../utils/constants";

const modalContainer = document.getElementById("modal");

const Modal = ({ onClose, visible, children }) => {
  useEffect(() => {
    const handleEscapeClose = (e) => {
      if (e.key === escape) {
        onClose();
      }
    };

    if (visible) {
      document.addEventListener("keydown", handleEscapeClose);
      body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
      body.style.overflow = "visible";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return ReactDOM.createPortal(
    <div
      className={
        visible
          ? `${styles.navigation} + ${styles.navigation_active}`
          : `${styles.navigation}`
      }
    >
      {children}
    </div>,
    modalContainer
  );
};

export default Modal;
