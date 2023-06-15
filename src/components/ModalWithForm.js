import React from "react";
import "../blocks/ModalWithForm.css";

const ModalWithForm = ({
  title,
  children,
  onClose,
  name,
  // onSubmit,
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
    <div className={`modal modal_type_${name}`}>
      <div className="modal__container-form" onClick={onOutClick}>
        <form className="modal__form" onSubmit={handleSubmit}>
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
                {/* <button className="modal__submit-button" type="submit"> */}
                {buttonText}
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
