import React from "react";
import "../blocks/Card.css";

const Card = ({ item, onSelectCard }) => {
  console.log(Card.name)
  return (
    <div>
      <div className="card">
        <div className="card__container">
          <img
            src={item.link}
            className="card__image"
            onClick={() => onSelectCard(item)}
          />
          <p className="card__name"> {item.name} </p>
        </div>
        {/* <div className="card__container"> */}
        {/* <p className="card__name"> {item.name} </p> */}
      </div>
    </div>
  );
};

export default Card;
