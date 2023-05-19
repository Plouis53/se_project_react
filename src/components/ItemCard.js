import React from "react";
import "../blocks/Card.css";
import "../blocks/Profile.css";

const ItemCard = ({ item, onSelectCard }) => {
  debugger;
  const handleCardClick = () => {
    onSelectCard(item);
  };
  return (
    <div className="card">
      <div className="card__container">
        <p className="card__name">{item.name}</p>
        <img
          src={item?.link || item?.imageUrl || ""}
          className="card__image"
          onClick={handleCardClick}
          alt={item.name}
        />
      </div>
    </div>
  );
};

export default ItemCard;
