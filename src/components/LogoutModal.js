import React from "react";
import closeIcon from "../images/Union.svg";

const LogoutModal = ({ handleCloseModal, handleOutClick, logout }) => {
  const handleSignout = () => {
    logout();
    handleCloseModal();
  };

  return (
    <div className="modal__container-confirm" onClick={handleOutClick}>
      <div className="modal__confirm">
        <button type="button" className="modal__button" aria-label="Close">
          <img
            className="modal__close"
            alt="Close button"
            src={closeIcon}
            onClick={handleCloseModal}
          />
        </button>
        <div className="modal__container_confirm">
          <p className="modal__text_confirm">
            Are you sure you want to log out?
          </p>
        </div>
        <button
          className="modal__button_confirm"
          type="button"
          aria-label="Confirm"
          onClick={handleSignout}
        >
          Yes, log out
        </button>
        <button
          className="modal__button_cancel"
          type="button"
          aria-label="Cancel"
          onClick={handleCloseModal}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LogoutModal;
