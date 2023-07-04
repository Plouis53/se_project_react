import React from "react";
import closeIcon from "../images/Union.svg";
import "../blocks/ModalWithForm.css";

const ModalWithForm = ({
  title,
  children,
  onClose,
  buttonText,
  onOutClick,
  handleSubmit,
  buttonClass,
  altButtonClick,
}) => {
  if (!buttonText.other) {
    buttonText.other = null;
  }

  return (
    <div className="modal__container-form" onClick={onOutClick}>
      <form className="modal__form" onSubmit={handleSubmit}>
        <fieldset className="modal__fieldset">
          <button type="button" className="modal__button" aria-label="Close">
            <img
              className="modal__close"
              alt="modal-close-button"
              src={closeIcon}
              id="addModal-close"
              onClick={onClose}
            />
          </button>
          <h2 className="modal__header">{title}</h2>
          {children}
          <div>
            <button
              className={buttonClass.mainButton}
              type="submit"
              aria-label="Save"
              id="addSave"
            >
              {buttonText.button}
            </button>
            <button
              className={buttonClass.altButton}
              type="button"
              onClick={altButtonClick}
            >
              {buttonText.other}
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default ModalWithForm;
