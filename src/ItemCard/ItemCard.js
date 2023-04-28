import React from "react";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div>
      <div className="card">
        <img
          src={item.link}
          className="card_image"
          onClick={() => onSelectCard(item)}
        />
      </div>
      <p className="card_name"> {item.name} </p>
    </div>
  );
};

export default ItemCard;
