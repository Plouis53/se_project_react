import React from "react";
import "./ModalWithForm.css";
// import closeIcon from "./Images/Union:close.svg";

const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  onClose,
  name,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal_container-form">
        <button
          type="button"
          className="modal__close"
          aria-label="Close"
          onClick={onClose}
        ></button>
        <h2 className="modal__header">New Garment</h2>
        <form>{children}</form>
        <button type="submit">{buttonText}</button>
      </div>
    </div>
  );
};

export default ModalWithForm;
