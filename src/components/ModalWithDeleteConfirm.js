import React from "react";
import closeIcon from "../images/Union.svg";
import "../blocks/ModalConfirm.css";

const ModalWithDeleteConfirm = ({
  onOutClick,
  onDelete,
  card,
  onClose,
  onCancel,
}) => {
  const handleDeleteClick = () => {
    onDelete(card._id);
  };

  return (
    <div className="modal__container-confirm" onClick={onOutClick}>
      <div className="modal__confirm">
        <button type="button" className="modal__button" aria-label="Close">
          <img
            className="modal__close"
            alt="Close button"
            src={closeIcon}
            onClick={onClose}
          />
        </button>
        <div className="modal__container_confirm">
          <p>Are you sure you want to delete this item?</p>
          <p className="modal__text_confirm">This action is irreversible.</p>
        </div>
        <button
          className="modal__button_confirm"
          type="button"
          aria-label="Confirm"
          onClick={handleDeleteClick}
        >
          Yes, delete item
        </button>
        {/* <button
          className="popup__confirmation-close"
          onClick={onClose}
        ></button> */}
        {/* <div className="popup__confirmation-buttons">
          <button
            className="popup__button_confirm"
            type="button"
            aria-label="Confirm"
            onClick={onClose}
          >
            Yes, delete item
          </button> */}
        <button
          className="modal__button_cancel"
          type="button"
          aria-label="Cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ModalWithDeleteConfirm;