import React from "react";
import "../blocks/ModalWithForm.css";

const ModalWithForm = ({ title, children, onClose, name, onSubmit }) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__container-form">
        <div className="modal__form" onSubmit={onSubmit}>
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
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default ModalWithForm;
