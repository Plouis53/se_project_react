import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm";
import "../components/App";

const AddItemModal = ({ isOpen, onAddItem, handleCloseModal, buttonText }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weatherChange, setWeatherChange] = useState("");

  React.useEffect(() => {
    if (isOpen) {
      setName("");
      setImageUrl("");
      setWeatherChange("");
    }
  }, [isOpen]);

  const handleAddItemSubmit = (e) => {
    e.preventDefault();
    const card = {
      name: name,
      imageUrl: imageUrl,
      weather: weatherChange,
    };
    onAddItem(card);
    handleCloseModal();
  };

  const handleWeatherChange = (e) => {
    setWeatherChange(e.target.value);
  };

  return (
    <ModalWithForm
      buttonText={buttonText}
      title="New Garment"
      name="add"
      onClose={handleCloseModal}
      onSubmit={handleAddItemSubmit}
    >
      <form onSubmit={handleAddItemSubmit} name={name}>
        <fieldset className="modal__fieldset">
          <label className="modal__label">
            Name
            <input
              className="modal__input"
              type="text"
              placeholder="Name"
              required
              name="name"
              id="input-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="modal__label">
            Image
            <input
              className="modal__input"
              type="url"
              placeholder="Image Link"
              required
              name="Image Link"
              id="input-link"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </label>
          <p className="modal__text">Select the weather type:</p>
          <div className="modal__input-container">
            <div>
              <input
                className="modal__input-button"
                type="radio"
                id="hot"
                value="hot"
                name="rangeOfTemp"
                onChange={handleWeatherChange}
              />
              <label className="modal__temp-ranges">Hot</label>
            </div>
            <div>
              <input
                className="modal__input-button"
                type="radio"
                id="warm"
                value="warm"
                name="rangeOfTemp"
                onChange={handleWeatherChange}
              />
              <label className="modal__temp-ranges">Warm</label>
            </div>
            <div>
              <input
                className="modal__input-button"
                type="radio"
                id="cold"
                value="cold"
                name="rangeOfTemp"
                onChange={handleWeatherChange}
              />
              <label className="modal__temp-ranges">Cold</label>
            </div>
          </div>
        </fieldset>
        <button className="modal__submit-button" type="submit">
          Add garment
        </button>
      </form>
    </ModalWithForm>
  );
};
export default AddItemModal;
