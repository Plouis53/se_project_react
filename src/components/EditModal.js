import React, { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import ModalWithForm from "./ModalWithForm";

const EditModal = ({ handleCloseModal, handleOutClick, handleEdit }) => {
  const currentUser = useContext(CurrentUserContext);

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
    // const onUpdateProfile = { name: values.name, avatarUrl: values.avatarUrl };
    // handleEdit(onUpdateProfile);
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
          maxLength="30"
          defaultValue={currentUser.data.name}
          onChange={handleEdit}
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
          maxLength="30"
          defaultValue={currentUser.data.avatar}
          onChange={handleEdit}
        />
      </label>
    </ModalWithForm>
  );
};

export default EditModal;

// import React, { useContext, useState } from "react";
// import CurrentUserContext from "../contexts/CurrentUserContext";
// import ModalWithForm from "./ModalWithForm";

// const EditModal = ({ handleCloseModal, handleOutClick, handleEdit }) => {
//   const currentUser = useContext(CurrentUserContext);

//   const buttonClasses = {
//     mainButton: "modal__add",
//     altButton: "modal__leave",
//   };

//   const buttonTexts = {
//     button: "Save Changes",
//     other: null,
//   };

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     // const onUpdateProfile = { name: values.name, avatarUrl: values.avatarUrl };
//     // handleEdit(onUpdateProfile);
//   };
//   // const [name, setName] = useState(currentUser.name);
//   // const [avatarUrl, setAvatarUrl] = useState(currentUser.avatar);

//   // const handleNameChange = (e) => {
//   //   setName(e.target.value);
//   // };

//   // const handleAvatarUrlChange = (e) => {
//   //   setAvatarUrl(e.target.value);
//   // };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   onUpdateProfile(name, avatarUrl, email);
//   //   onClose();
//   // };

//   return (
//     <ModalWithForm
//       title="Change profile Data"
//       name="Edit"
//       onClose={handleCloseModal}
//       buttonText={buttonTexts}
//       onOutClick={handleOutClick}
//       handleSubmit={handleSubmit}
//       buttonClass={buttonClasses}
//     >
//       <label className="modal__label">
//         Name*
//         <input
//           className="modal__input"
//           type="text"
//           name="name"
//           id="inputName"
//           required
//           minLength="1"
//           maxLength="30"
//           defaultValue={currentUser.data.name}
//           onChange={handleEdit}
//         />
//       </label>
//       <label className="modal__label">
//         Avatar*
//         <input
//           className="modal__input"
//           placeholder="Avatar URL"
//           name="avatarURL"
//           id="inputAvatarURL"
//           required
//           minLength="1"
//           maxLength="30"
//           defaultValue={currentUser.data.name}
//           onChange={handleEdit}
//         />
//       </label>
//     </ModalWithForm>
//   );
// };

// export default EditModal;
