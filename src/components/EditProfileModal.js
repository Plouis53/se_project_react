import React, { useState } from "react";
import "../blocks/EditProfileModal.css";

const EditProfileModal = ({ currentUser, onUpdateProfile, onClose }) => {
  const [name, setName] = useState(currentUser.name);
  const [avatarUrl, setAvatarUrl] = useState(currentUser.avatar);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarUrlChange = (e) => {
    setAvatarUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProfile(name, avatarUrl);
    onClose();
  };

  return (
    <div className="edit-profile-modal">
      <h2 className="edit-profile-modal__title">Edit Profile</h2>
      <form className="edit-profile-modal__form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="edit-profile-modal__label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          className="edit-profile-modal__input"
          value={name}
          onChange={handleNameChange}
        />
        <label htmlFor="avatar" className="edit-profile-modal__label">
          Avatar URL:
        </label>
        <input
          type="text"
          id="avatar"
          className="edit-profile-modal__input"
          value={avatarUrl}
          onChange={handleAvatarUrlChange}
        />
        <div className="edit-profile-modal__buttons">
          <button type="submit" className="edit-profile-modal__submit-btn">
            Save
          </button>
          <button
            type="button"
            className="edit-profile-modal__cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileModal;
