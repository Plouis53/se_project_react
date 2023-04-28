import React from "react";
import "../blocks/Card.css";

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
      <div className="card__container">
        <p className="card__name"> {item.name} </p>
      </div>
    </div>
  );
};

export default ItemCard;
