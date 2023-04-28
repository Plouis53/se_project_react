import React from "react";
import "../blocks/ModalWithForm.css";

// import closeIcon from "../Images/Union.svg";

const ModalWithForm = ({ children, onClose, name }) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__container-form">
        <form className="modal__form" name="add">
          <fieldset className="modal__fieldset">
            <button
              className="modal__close"
              type="button"
              aria-label="Close"
              id="modal-close-button"
              onClick={onClose}
            >
              {/* <img
                className="modal__close"
                alt="Close button image"
                src={closeIcon}
              ></img> */}
            </button>
            <h2 className="modal__header">New Garment</h2>
            {/* <div className="modal_container-form">
        <button
          type="button"
          className="modal__close"
          aria-label="Close"
          onClick={onClose}
        ></button>
        <h2 className="modal__header">New Garment</h2> */}
            <form>{children}</form>
            <button className="modal__footer" type="submit" id="modal-add">
              Add garment
            </button>
            {/* <button
              className="modal__save"
              type="submit"
              aria-label="Save"
              id="add-save"
            >
              Add garment
            </button> */}
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
