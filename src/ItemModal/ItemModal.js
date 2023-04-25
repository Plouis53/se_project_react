import React from "react";

const ItemModal = ({ selectedCard }) => {
  console.log("item modal");
  return (
    <div className={`modal`}>
      <div className="modal_content">
        <img src={selectedCard.link} />
        <div>{selectedCard.name}</div>
        <div>Weather Type: {selectedCard.weather}</div>
      </div>
    </div>
  );
};

export default ItemModal;
