import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm";

const AddItemModal = ({ isOpen, onAddItem, handleCloseModal }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  React.useEffect(() => {
    if (isOpen) {
      setName("");
      setImageUrl("");
      setWeather("");
    }
  }, [isOpen]);

  const handleAddItemSubmit = (e) => {
    e.preventDefault();
    const card = {
      name: name,
      imageUrl: imageUrl,
      weather: weather,
    };
    onAddItem(card);
  };

  return (
    <ModalWithForm
      title="New Garment"
      name="add"
      onClose={handleCloseModal}
      onSubmit={handleAddItemSubmit}
    >
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
            name="Image Url"
            id="input-url"
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
            />
            <label className="modal__temp-ranges">Cold</label>
          </div>
        </div>
      </fieldset>
    </ModalWithForm>
  );
};
export default AddItemModal;
