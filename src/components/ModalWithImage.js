import React, { useContext } from "react";
import closeIcon from "../images/Union.svg";
import CurrentUserContext from "../contexts/CurrentUserContext";
import "../blocks/ModalWithImage.css";

const ModalWithImage = ({
  selectedCard,
  onClose,
  onOutClick,
  onDeleteClick,
}) => {
  const currentUser = useContext(CurrentUserContext);

  const isOwn =
    selectedCard.owner ===
    (currentUser.data === undefined ? "" : currentUser.data._id);

  return (
    <div className="modal__container-image" onClick={onOutClick}>
      <div className="modal__photo">
        <img
          src={selectedCard.imageUrl}
          alt={`${selectedCard.name}`}
          className="modal__image"
        />
        <button type="button" className="modal__button" aria-label="Close">
          <img
            className="modal__close"
            alt="Close button"
            src={closeIcon}
            id="imageModal-close"
            onClick={onClose}
          />
        </button>
        <div className="modal__subcontainer">
          <div>
            <h2 className="modal__title">{selectedCard.name}</h2>
            <p className="modal__title modal__weather">
              Weather: {selectedCard.weather}
            </p>
          </div>
          {isOwn ? (
            <button
              className="modal__delete"
              onClick={onDeleteClick}
              aria-label="Delete"
            >
              Delete Item
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ModalWithImage;
