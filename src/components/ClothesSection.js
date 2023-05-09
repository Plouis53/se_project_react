import React, { useContext } from "react";
import ClothingCard from "./ClothingCard";

const ClothesSection = ({ cards, onCardClick, onAddClick }) => {
  const currentUser = useContext();

  return (
    <div className="profile">
      <div className="profile__container">
        <p className="profile__sidebar">Your items</p>
        <button
          type="button"
          className="profile__add"
          aria-label="Add"
          onClick={onAddClick}
        >
          + Add New
        </button>
      </div>
      <ul className="profile__cards">
        {cards
          .filter(
            (card) =>
              card.owner ===
              (currentUser.data === undefined ? "" : currentUser.data._id)
          )
          .map((card) => (
            <ClothingCard
              key={card._id}
              item={card}
              onCardClick={onCardClick}
            />
          ))}
      </ul>
    </div>
  );
};

export default ClothesSection;
