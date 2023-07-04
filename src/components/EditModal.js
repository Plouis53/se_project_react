import React, { useContext, useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import ModalWithForm from "./ModalWithForm";

const EditModal = ({ handleCloseModal, handleOutClick, handleEdit }) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser?.name || "");
  const [avatarUrl, setAvatarUrl] = useState(currentUser?.avatar || "");

  const buttonClasses = {
    mainButton: "modal__add",
    altButton: "modal__leave",
  };

  const buttonTexts = {
    button: "Save Changes",
    other: null,
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const onUpdateProfile = { name, avatarUrl };
    handleEdit(onUpdateProfile);
  };

  return (
    <ModalWithForm
      title="Change Profile Data"
      name="Edit"
      onClose={handleCloseModal}
      buttonText={buttonTexts}
      onOutClick={handleOutClick}
      handleSubmit={handleSubmit}
      buttonClass={buttonClasses}
    >
      <label className="modal__label">
        Name*
        <input
          className="modal__input"
          type="text"
          name="name"
          id="inputName"
          required
          minLength="1"
          maxLength="300"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
      </label>
      <label className="modal__label">
        Avatar*
        <input
          className="modal__input"
          placeholder="Avatar URL"
          name="avatarURL"
          id="inputAvatarURL"
          required
          minLength="1"
          maxLength="300"
          value={avatarUrl}
          onChange={(evt) => setAvatarUrl(evt.target.value)}
        />
      </label>
    </ModalWithForm>
  );
};

export default EditModal;
