import React from "react";
import "../blocks/Card.css";
import "../blocks/Page.css";

const Card = ({ item, name, onSelectCard, weather, _id, id, link }) => {
  console.log(Card.name);
  return (
    <div>
      <div className="card">
        <div className="card__container">
          <p className="card__name"> {item.name} </p>
          <img
            src={item.link}
            className="card__image"
            onClick={() => onSelectCard(item, name, weather, _id, id, link)}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
