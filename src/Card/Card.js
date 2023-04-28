import React from "react";
import "./Card";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div>
      <div className="card">
        <img
          src={item.link}
          className="card__image"
          onClick={() => onSelectCard(item)}
        />
      </div>
      <p className="card__name"> {item.name} </p>
    </div>
  );
};

export default ItemCard;
