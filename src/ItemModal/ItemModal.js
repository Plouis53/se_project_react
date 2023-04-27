import React from "react";
import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, closeIcon }) => {
  return (
    <div className={`popup__container-image`}>
      <div className="popup__photo">
        <img className="popup__image" src={selectedCard.link} alt="/" />
        <button
          className="popup__button"
          type="button"
          aria-label="Close"
          id="popup-button"
          onClick={onClose}
        >
          <img
            className="popup-close"
            alt="Close button image"
            src={closeIcon}
            id="image-popup-close"
          ></img>
        </button>
        <div className="popupl__subcontainer">
          <div>
            <h2 className="popup__title">{selectedCard.name}</h2>
            <p className="popup__weather">
              Weather Type: {selectedCard.weather}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
