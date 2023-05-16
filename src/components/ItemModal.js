import React, { useState } from "react";
import "../blocks/ItemModal.css";
import "../components/ModalWithForm";

const ItemModal = ({
  selectedCard,
  onClose,
  onDelete,
  onCloseConfirmationModal,
}) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleDelete = () => {
    onDelete(selectedCard.id);
    // setShowConfirmationModal(false);
    onCloseConfirmationModal(false);
  };

  const handleOpenConfirmationModal = () => {
    setShowConfirmationModal(true);
  };

  const handleCloseConfirmationModal = () => {
    setShowConfirmationModal(false);
    onCloseConfirmationModal(false);
  };

  return (
    <div className={`popup__container-image`}>
      <div className="popup__photo">
        <img
          className="popup__image"
          src={selectedCard.link}
          alt={selectedCard.name}
        />
        <button
          className="popup__close"
          type="button"
          aria-label="Close"
          id="popup-button"
          onClick={onClose}
        ></button>
        <div className="popup__subcontainer">
          <div>
            <h2 className="popup__title">{selectedCard.name}</h2>
            <p className="popup__weather">
              Weather Type: {selectedCard.weather}
            </p>
          </div>
          <button
            className="popup__delete"
            onClick={handleOpenConfirmationModal}
          >
            Delete
          </button>
          {showConfirmationModal && (
            <div className="popup__confirmation">
              <p>Are you sure you want to delete this item?</p>
              <p className="popup__text_confirm">
                This action is irreversible.
              </p>
              <button
                className="popup__confirmation-close"
                onClick={onClose}
              ></button>
              <div className="popup__confirmation-buttons">
                <button
                  className="popup__button_confirm"
                  type="button"
                  aria-label="Confirm"
                  onClick={handleDelete}
                >
                  Yes, delete item
                </button>
                <button
                  className="popup__button_cancel"
                  type="button"
                  aria-label="Cancel"
                  onClick={handleCloseConfirmationModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
