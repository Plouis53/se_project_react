import React, { useContext } from "react";
import ItemCard from "./ItemCard";
import CurrentUserContext from "../contexts/CurrentUserContext";
import "../blocks/Profile.css";

const ClothesSection = ({
  cards,
  onCardClick,
  onAddClick,
  isLoggedIn,
  onLike,
  onUnlike,
}) => {
  const currentUser = useContext(CurrentUserContext);

  // Add a check to ensure cards is an array before filtering
  const filteredCards = Array.isArray(cards)
    ? cards.filter((card) => card.owner === (currentUser && currentUser._id))
    : [];

  return (
    <div className="profile__container">
      <div className="profile__subcontainer">
        <p className="profile__title">Your items</p>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Add"
          onClick={onAddClick}
        >
          + Add new
        </button>
      </div>
      <ul className="profile__cards">
        {filteredCards.map((card) => (
          <ItemCard
            key={card._id}
            item={card}
            onSelectCard={onCardClick}
            onLike={onLike}
            onUnlike={onUnlike}
            isLoggedIn={isLoggedIn}
          />
        ))}
      </ul>
    </div>
  );
};

export default ClothesSection;

// const ClothesSection = ({
//   cards,
//   onCardClick,
//   onAddClick,
//   isLoggedIn,
//   onLike,
//   onUnlike,
// }) => {
//   const currentUser = useContext(CurrentUserContext);

//   const filteredCards = cards.filter(
//     (card) => card.owner === (currentUser === undefined ? "" : currentUser._id)
//   );

//   return (
//     <div className="profile__container">
//       <div className="profile__subcontainer">
//         <p className="profile__title">Your items</p>
//         <button
//           className="profile__add-button"
//           type="button"
//           aria-label="Add"
//           onClick={onAddClick}
//         >
//           + Add new
//         </button>
//       </div>
//       <ul className="profile__cards">
//         {filteredCards.map((card) => (
//           <ItemCard
//             key={card._id}
//             item={card}
//             onSelectCard={onCardClick}
//             onLike={onLike}
//             onUnlike={onUnlike}
//             isLoggedIn={isLoggedIn}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ClothesSection;
