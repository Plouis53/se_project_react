import React from "react";
import "../blocks/Card.css";

const ItemCard = ({ item, onSelectCard }) => {
  const handleCardClick = () => {
    if (typeof onSelectCard === "function") {
      onSelectCard(item);
    }
  };

  return (
    <div className="card">
      <div className="card__container">
        <p className="card__name">{item.name}</p>
        <img
          src={item.link}
          className="card__image"
          onClick={handleCardClick}
          alt={item.name}
        />
      </div>
    </div>
  );
};

export default ItemCard;
