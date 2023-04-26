import React from "react";
import "./ModalWithForm.css";
// import closeIcon from "./Images/Union:close.svg";

const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onClose,
  name,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal_content">
        <button
          type="button"
          className="modal__close"
          aria-label="Close"
          onClick={onClose}
        >
        </button>
        <h3 className="popup__header">New Garment</h3>
        <form>{children}</form>
        <button type="submit">{buttonText}</button>
      </div>
    </div>
  );
};

export default ModalWithForm;
