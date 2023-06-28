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
}) => {
  const currentUser = useContext(CurrentUserContext);
  console.log({ currentUser });
  console.log(onLike);
  const filteredCards = cards.filter(
    (card) =>
      card.owner ===
      (currentUser.data === undefined ? "" : currentUser.data._id)
  );

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

// import React, { useContext } from "react";
// import ItemCard from "./ItemCard";
// import CurrentUserContext from "../contexts/CurrentUserContext";
// import "../blocks/ClothesSection.css";

// const ClothesSection = ({
//   cards,
//   onCardClick,
//   onAddClick,
//   isLoggedIn,
//   onLike,
// }) => {
//   const currentUser = useContext(CurrentUserContext);
//   return (
//     <div className="profile__container">
//       <div className="profile__subcontainer">
//         <p className="profile__title">Your items</p>
//         <button
//           className="profile__add-button" // might want to change the class name to be uniformed
//           type="button"
//           aria-label="Add"
//           onClick={onAddClick}
//         >
//           + Add new
//         </button>
//       </div>
//       <ul className="profile__cards">
//         {cards.filter(
//           (card) =>
//             card.owner ===
//             (currentUser.data === undefined ? "" : currentUser.data._id)
//         )}
//         {cards.map((card) => (
//           <ItemCard
//             key={card.id}
//             item={card}
//             onSelectCard={onCardClick}
//             onLike={onLike}
//             isLoggedIn={isLoggedIn}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ClothesSection;
