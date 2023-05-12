import React from "react";
import "../blocks/ModalWithForm.css";

// import closeIcon from "../Images/Union.svg";

const ModalWithForm = ({
  buttonText = "Add garment",
  title,
  children,
  onClose,
  name,
  onSubmit,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__container-form">
        <form className="modal__form" name={name} onSubmit={onSubmit}>
          <fieldset className="modal__fieldset">
            <button
              className="modal__close"
              type="button"
              aria-label="Close"
              id="modal-close-button"
              onClick={onClose}
            ></button>
            <h2 className="modal__header">{title}</h2>
            {children}
            <button className="modal__footer" id="modal-add">
              {buttonText}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
