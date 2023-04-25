import React from "react";

const ItemModal = ({ selectedCard }) => {
  console.log("item modal");
  return (
    <div className={`modal`}>
      <div className="modal_content">
        <img src={selectedCard.link} />
        <div>Text for the item name</div>
        <div>Weather Type</div>
      </div>
    </div>
  );
};

export default ItemModal;
