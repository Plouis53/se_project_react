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
    <div className="profile__container">
      <div className="profile__subcontainer">
        <p className="profile__title">Your items</p>
        <button
          className="profile__add" // might want to change the class name to be uniformed
          type="button"
          aria-label="Add"
          onClick={onAddClick}
        >
          + Add new
        </button>
      </div>
      <ul className="profile__cards">
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
