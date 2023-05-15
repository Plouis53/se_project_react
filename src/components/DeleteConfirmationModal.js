// import ItemModal from "./ItemModal";

// const ItemModal = ({ selectedCard, onClose, onDelete }) => {
//   const [showConfirmationModal, setShowConfirmationModal] = useState(false);

//   const handleDelete = () => {
//     onDelete(selectedCard.id);
//     handleCloseConfirmationModal(false);
//   };

//   const handleOpenConfirmationModal = () => {
//     setShowConfirmationModal(true);
//   };

//   const handleCloseConfirmationModal = () => {
//     setShowConfirmationModal(false);
//   };

//   return (
//     {showConfirmationModal && (
//         <div className="popup__confirmation">
//           <p>Are you sure you want to delete this item?</p>
//           <p className="popup__text_confirm">
//             This action is irreversible.
//           </p>
//           <button
//             className="popup__confirmation-close"
//             onClick={onClose}
//           ></button>
//           <div className="popup__confirmation-buttons">
//             <button
//               className="popup__button_confirm"
//               type="button"
//               aria-label="Confirm"
//               onClick={handleDelete}
//             >
//               Yes, delete item
//             </button>
//             <button
//               className="popup__button_cancel"
//               type="button"
//               aria-label="Cancel"
//               onClick={handleCloseConfirmationModal}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//   )
    