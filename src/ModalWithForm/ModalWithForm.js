import React from "react";
import "./ModalWithForm.css";
import Close Icon 

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

        <button type="button" className="popup__button"  aria-label="Close" onClick={onClose}>
          Close
          <img className="popup__close" alt="Close Button Image" src=""
        </button>
        <h3 className="popup__header">New Garment</h3>
        <form>{children}</form>
        <button type="submit">{buttonText}</button>
      </div>
    </div>
  );
};

export default ModalWithForm;
