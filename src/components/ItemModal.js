import React, { useState, useContext } from "react";
import "../blocks/ItemModal.css";
import "../components/ModalWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

const ItemModal = ({ selectedCard, onClose, onOutClick, onDeleteClick }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleDelete = () => {
    onDeleteClick(selectedCard.id);
    handleCloseConfirmationModal();
  };

  const handleOpenConfirmationModal = () => {
    setShowConfirmationModal(true);
  };

  const handleCloseConfirmationModal = () => {
    setShowConfirmationModal(false);
  };

  // Checking if the current user is the owner of the current clothing item
  // const isOwn =
  //   selectedCard.owner && selectedCard.owner._id === currentUser._id;

  // Creating a variable which you'll then set in `className` for the delete button
  // const itemDeleteButtonClassName = `item__delete-button ${
  //   isOwn ? "item__delete-button_visible" : "item__delete-button_hidden"
  // }`;
  console.log(selectedCard);
  return (
    <div className={`modal__container-image`} onClick={onOutClick}>
      <div className="popup__photo">
        <img
          className="popup__image"
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        />
        <button
          className="popup__close"
          type="button"
          aria-label="Close"
          id="popup-button"
          onClick={onClose}
        ></button>
        <div className="popup__subcontainer">
          <div>
            <h2 className="popup__title">{selectedCard.name}</h2>
            <p className="popup__weather">
              Weather Type: {selectedCard.weather}
            </p>
          </div>
          {/* {isOwn && (
            <button
            className={"popup__delete"}
              onClick={handleOpenConfirmationModal}
            >
              Delete
            </button>
          )} */}
          <button
            className="popup__delete popup__delete-old"
            onClick={handleOpenConfirmationModal}
          >
            Delete
          </button>
          {showConfirmationModal && (
            <div className="popup__confirmation">
              <p>Are you sure you want to delete this item?</p>
              <p className="popup__text_confirm">
                This action is irreversible.
              </p>
              <button
                className="popup__confirmation-close"
                onClick={onClose}
              ></button>
              <div className="popup__confirmation-buttons">
                <button
                  className="popup__button_confirm"
                  type="button"
                  aria-label="Confirm"
                  onClick={handleDelete}
                >
                  Yes, delete item
                </button>
                <button
                  className="popup__button_cancel"
                  type="button"
                  aria-label="Cancel"
                  onClick={handleCloseConfirmationModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemModal;

// import React, { useState, useContext } from "react";
// import "../blocks/ItemModal.css";
// import "../components/ModalWithForm";
// import CurrentUserContext from "../contexts/CurrentUserContext";

// const ItemModal = ({ selectedCard, onClose, onDelete }) => {
//   const { currentUser } = useContext(CurrentUserContext);
//   const [showConfirmationModal, setShowConfirmationModal] = useState(false);

//   const handleDelete = () => {
//     onDelete(selectedCard.id);
//     handleCloseConfirmationModal();
//   };

//   const handleOpenConfirmationModal = () => {
//     setShowConfirmationModal(true);
//   };

//   const handleCloseConfirmationModal = () => {
//     setShowConfirmationModal(false);
//   };

//   // Checking if the current user is the owner of the current clothing item
//   const isOwn =
//     selectedCard.owner && selectedCard.owner._id === currentUser._id;

//   // Creating a variable which you'll then set in `className` for the delete button
//   const itemDeleteButton = `.popup__delete ${
//     isOwn ? "item__delete-button_visible" : "item__delete-button_hidden"
//   }`;

//   return (
//     <div className={`popup__container-image`}>
//       <div className="popup__photo">
//         <img
//           className="popup__image"
//           src={selectedCard.imageUrl}
//           alt={selectedCard.name}
//         />
//         <button
//           className="popup__close"
//           type="button"
//           aria-label="Close"
//           id="popup-button"
//           onClick={onClose}
//         ></button>
//         <div className="popup__subcontainer">
//           <div>
//             <h2 className="popup__title">{selectedCard.name}</h2>
//             <p className="popup__weather">
//               Weather Type: {selectedCard.weather}
//             </p>
//           </div>
//           {isOwn && (
//             <button
//               className="popup__delete"
//               onClick={handleOpenConfirmationModal}
//             >
//               Delete (Previous)
//             </button>
//           )}
//           {/* <button
//             className="popup__delete popup__delete-old"
//             onClick={handleOpenConfirmationModal}
//           >
//             Delete
//           </button> */}
//           {showConfirmationModal && (
//             <div className="popup__confirmation">
//               <p>Are you sure you want to delete this item?</p>
//               <p className="popup__text_confirm">
//                 This action is irreversible.
//               </p>
//               <button
//                 className="popup__confirmation-close"
//                 onClick={onClose}
//               ></button>
//               <div className="popup__confirmation-buttons">
//                 <button
//                   className="popup__button_confirm"
//                   type="button"
//                   aria-label="Confirm"
//                   onClick={handleDelete}
//                 >
//                   Yes, delete item
//                 </button>
//                 <button
//                   className="popup__button_cancel"
//                   type="button"
//                   aria-label="Cancel"
//                   onClick={handleCloseConfirmationModal}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItemModal;

//61323 import React, { useState } from "react";
// import "../blocks/ItemModal.css";
// import "../components/ModalWithForm";

// const ItemModal = ({ selectedCard, onClose, onDelete }) => {
//   const [showConfirmationModal, setShowConfirmationModal] = useState(false);

//   const handleDelete = () => {
//     onDelete(selectedCard.id);
//     handleCloseConfirmationModal();
//   };

//   const handleOpenConfirmationModal = () => {
//     setShowConfirmationModal(true);
//   };

//   const handleCloseConfirmationModal = () => {
//     setShowConfirmationModal(false);
//   };

//   return (
//     <div className={`popup__container-image`}>
//       <div className="popup__photo">
//         <img
//           className="popup__image"
//           src={selectedCard.imageUrl}
//           alt={selectedCard.name}
//         />
//         <button
//           className="popup__close"
//           type="button"
//           aria-label="Close"
//           id="popup-button"
//           onClick={onClose}
//         ></button>
//         <div className="popup__subcontainer">
//           <div>
//             <h2 className="popup__title">{selectedCard.name}</h2>
//             <p className="popup__weather">
//               Weather Type: {selectedCard.weather}
//             </p>
//           </div>
//           <button
//             className="popup__delete"
//             onClick={handleOpenConfirmationModal}
//           >
//             Delete
//           </button>
//           {showConfirmationModal && (
//             <div className="popup__confirmation">
//               <p>Are you sure you want to delete this item?</p>
//               <p className="popup__text_confirm">
//                 This action is irreversible.
//               </p>
//               <button
//                 className="popup__confirmation-close"
//                 onClick={onClose}
//               ></button>
//               <div className="popup__confirmation-buttons">
//                 <button
//                   className="popup__button_confirm"
//                   type="button"
//                   aria-label="Confirm"
//                   onClick={handleDelete}
//                 >
//                   Yes, delete item
//                 </button>
//                 <button
//                   className="popup__button_cancel"
//                   type="button"
//                   aria-label="Cancel"
//                   onClick={handleCloseConfirmationModal}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItemModal;
