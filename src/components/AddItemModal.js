import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm";
import itemsApi from "../utils/api";

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
    const newItem = {
      name: name,
      imageUrl: imageUrl,
      weather: weatherChange,
    };
    itemsApi
      .add(newItem.name, newItem.imageUrl, newItem.weather)
      .then((response) => {
        console.log("Item added successfully:", response);
        onAddItem(newItem);
        handleCloseModal();
      })
      .catch((error) => {
        console.log("Error adding item:", error);
      });
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
              placeholder="Image Url"
              required
              name="imageUrl"
              id="input-imageUrl"
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
