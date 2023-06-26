import React from "react";
import closeIcon from "../images/Union.svg";
import "../blocks/ModalWithForm.css";

const ModalWithForm = ({
  title,
  children,
  onClose,
  // name,
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

  // const buttonClasses = {
  //   mainButton: "modal__login",
  //   altButton: "modal__other",
  // };

  return (
    // <div className={`modal modal_type_${name}`}>
    <div className="modal__container-form" onClick={onOutClick}>
      {/* <div className={`modal modal_type_${name}`}> */}
      <form className="modal__form" onSubmit={handleSubmit}>
        <fieldset className="modal__fieldset">
          {/* <button
              className="modal__close"
              type="button"
              aria-label="Close"
              id="modal-close-button"
              onClick={onClose}
            ></button> */}
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
              {/* <button className="modal__submit-button" type="submit"> */}
              {/* {buttonText.alt} */}
            </button>
          </div>
        </fieldset>
      </form>
    </div>
    // </div>
  );
};

export default ModalWithForm;
