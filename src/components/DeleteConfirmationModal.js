const DeleteConfirmationModal = ({
  onOutClick,
  onDelete,
  card,
  onClose,
  onCancel,
}) => {
  const handleDeleteClick = () => {
    onDelete(card._id);
  };

  return (
    <div className="popup__confirmation">
      <p>Are you sure you want to delete this item?</p>
      <p className="popup__text_confirm">This action is irreversible.</p>
      <button
        className="popup__confirmation-close"
        onClick={onOutClick}
      ></button>
      <div className="popup__confirmation-buttons">
        <button
          className="popup__button_confirm"
          type="button"
          aria-label="Confirm"
          onClick={handleDeleteClick}
        >
          Yes, delete item
        </button>
        <button
          className="popup__button_cancel"
          type="button"
          aria-label="Cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
