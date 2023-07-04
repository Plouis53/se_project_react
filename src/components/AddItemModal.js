import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm";

const AddItemModal = ({
  isOpen,
  onAddItem,
  handleCloseModal,
  handleOutClick,
  token,
  isLoading,
}) => {
  const [nameValue, setNameValue] = useState("");
  const [imageValue, setImageValue] = useState("");
  const [weatherValue, setWeatherValue] = useState("");

  const buttonClasses = {
    mainButton: "modal__add",
    altButton: "modal__leave",
  };

  const buttonTexts = {
    button: isLoading ? "Saving..." : "Add Garment",
    other: null,
  };

  React.useEffect(() => {
    if (isOpen) {
      setNameValue("");
      setImageValue("");
      setWeatherValue("");
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const card = {};
    card.name = nameValue;
    card.imageUrl = imageValue;
    card.weather = weatherValue;
    onAddItem({
      card,
      token,
    });
  };

  const onNameChange = (evt) => {
    setNameValue(evt.target.value);
  };

  const onImageChange = (evt) => {
    setImageValue(evt.target.value);
  };

  const onWeatherChange = (evt) => {
    setWeatherValue(evt.target.value);
  };

  return (
    <ModalWithForm
      title="New Garment"
      name="add"
      onClose={handleCloseModal}
      buttonText={buttonTexts}
      onOutClick={handleOutClick}
      handleSubmit={handleSubmit}
      buttonClass={buttonClasses}
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
            minLength="1"
            maxLength="300"
            value={nameValue}
            onChange={onNameChange}
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
            value={imageValue}
            onChange={onImageChange}
          />
        </label>
        <p className="modal__text">Select the weather type:</p>
        <div className="modal__input-container" onChange={onWeatherChange}>
          <div>
            <input
              className="modal__input-button"
              type="radio"
              id="hot"
              value="hot"
              name="rangeOfTemp"
            />
            <label className="modal__temp-ranges" htmlFor="hot">
              Hot
            </label>
          </div>
          <div>
            <input
              className="modal__input-button"
              type="radio"
              id="warm"
              value="warm"
              name="rangeOfTemp"
            />
            <label className="modal__temp-ranges" htmlFor="warm">
              Warm
            </label>
          </div>
          <div>
            <input
              className="modal__input-button"
              type="radio"
              id="cold"
              value="cold"
              name="rangeOfTemp"
            />
            <label className="modal__temp-ranges" htmlFor="cold">
              Cold
            </label>
          </div>
        </div>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
