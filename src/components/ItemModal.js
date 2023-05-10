import React from "react";
import "../blocks/ItemModal.css";
import "../components/ModalWithForm";

const ItemModal = ({ selectedCard, onClose, onDelete }) => {
  const handleDelete = () => {
    onDelete(selectedCard.id);
  };

  return (
    <div className={`popup__container-image`}>
      <div className="popup__photo">
        <img
          className="popup__image"
          src={selectedCard.link}
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
          <button className="popup__delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;




// import React from "react";
// import "../blocks/ItemModal.css";
// import "../components/ModalWithForm";


// const handleDelete = () => {
//   onDelete(selectedCard.id);
// };

// const ItemModal = ({ selectedCard, onClose, onDelete }) => {
//   return (
//     <div className={`popup__container-image`}>
//       <div className="popup__photo">
//         <img
//           className="popup__image"
//           src={selectedCard.link}
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
//           <button className="popup__delete" onClick={onDelete}>
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItemModal;
