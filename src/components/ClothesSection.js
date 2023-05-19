import React from "react";
import "../blocks/ClothesSection.css";
import ItemCard from "./ItemCard";

const ClothesSection = ({ cards, onCardClick, onAddClick }) => {
  
  return (
    <div className="clothes">
      <div className="clothes__container">
        <div className="clothes__title">Your items</div>
      </div>
      <button
        className="clothes__button"
        type="button"
        aria-label="Add"
        onClick={onAddClick}
      >
        + Add new
      </button>
      <ul className="clothes__list">
        {cards.map((card) => (
          <ItemCard key={card._id} item={card} onSelectCard={onCardClick} />
        ))}
      </ul>
    </div>
  );
};

export default ClothesSection;
