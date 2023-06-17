import React, { useContext } from "react";
import ItemCard from "./ItemCard";
import CurrentUserContext from "../contexts/CurrentUserContext";
import "../blocks/ClothesSection.css";

const ClothesSection = ({
  cards,
  onCardClick,
  onAddClick,
  isLoggedIn,
  onLike,
}) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="clothes">
      <div className="clothes__container">
        <div className="clothes__title">Your items</div>
      </div>
      <button
        className="clothes__button" // might want to change the class name to be uniformed
        type="button"
        aria-label="Add"
        onClick={onAddClick}
      >
        + Add new
      </button>
      <ul className="clothes__list">
        {cards.filter(
          (card) =>
            card.owner ===
            (currentUser.data === undefined ? "" : currentUser.data._id)
        )}
        {cards.map((card) => (
          <ItemCard
            key={card.id}
            item={card}
            onSelectCard={onCardClick}
            onLike={onLike}
            isLoggedIn={isLoggedIn}
          />
        ))}
      </ul>
    </div>
  );
};

export default ClothesSection;
