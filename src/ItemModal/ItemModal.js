import React from "react";

const ItemModal = ({ selectedCard, onClose, closeIcon }) => {
  return (
    <div className={`itemModal__container-image`}>
      <div className="itemModal_photo">
        <img className="itemModal__popup-image" src={selectedCard.link} />
        <button
          className="itemModal__popup-button"
          type="button"
          aria-label="Close"
          id="itemModal-popup-button"
          onClick={onClose}
        >
          Close
        </button>
        <img
          className="itemModal__popup-close"
          alt="Close button image"
          src={closeIcon}
          id="popup-close"
        ></img>
        <div className="itemModal__subcontainer">
          {/* <h2 className="popup__title">"/"</h2> */}
          {/* <img src={selectedCard.link} /> */}
          <h2 className="popup__title">{selectedCard.name}</h2>
          <p className="popup__weather">Weather Type: {selectedCard.weather}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
