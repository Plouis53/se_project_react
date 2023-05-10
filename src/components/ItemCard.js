import React from "react";
import "../blocks/Card.css";


const ItemCard = ({ item, name, onSelectCard, weather, _id, id, link }) => {
  return (
    <div className="card">
      <div className="card__container">
        <p className="card__name"> {item.name} </p>
        <img
          src={item.link}
          className="card__image"
          onClick={() => onSelectCard(item, name, weather, _id, id, link)}
          alt={item.name}
        />
      </div>
    </div>
  );
};

export default ItemCard;
