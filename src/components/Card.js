import React from "react";
import "../blocks/Card.css";

const Card = ({ item, onSelectCard }) => {
  console.log(Card.name);
  return (
    <div>
      <div className="card">
        <div className="card__container">
          <p className="card__name"> {item.name} </p>
          <img
            src={item.link}
            className="card__image"
            onClick={() => onSelectCard(item)}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
