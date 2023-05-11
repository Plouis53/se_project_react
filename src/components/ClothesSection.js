import React from "react";
import ItemCard from "../components/ItemCard";

const ClothesSection = ({ cards, onCardClick, onAddClick }) => {
  return (
    <div className="clothes">
      <div className="clothes__container">
        <div className="clothes__title">Your items</div>
        <button
          className="clothes__button"
          type="button"
          aria-label="Add"
          onClick={onAddClick}
        >
          + Add new
        </button>
      </div>
      <ul className="clothes__list">
        {cards.map((card) => (
          <ItemCard
            key={card.id}
            item={card}
            onSelectCard={onCardClick}
            name={card.name}
            weather={card.weather}
            id={card.id}
            link={card.link}
          />
        ))}
      </ul>
    </div>
  );
};

export default ClothesSection;
