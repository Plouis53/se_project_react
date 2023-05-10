import React from "react";
import ItemCard from "../components/ItemCard"

const ClothesSection = ({ cards, onCardClick, onAddClick}) => {
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





// import React, { useContext } from "react";
// import ClothingCard from "./ItemCard";

// const ClothesSection = ({ cards, onCardClick, onAddClick }) => {
//   const currentUser = useContext();
//   return (
//     <div className="clothes">
//       <div className="clothes__container">
//         <div className="clothes__title">Your items</div>
//         <button
//           className="clothes__button"
//           type="button"
//           aria-label="Add"
//           onClick={onAddClick}
//         >
//           + Add new
//         </button>
//       </div>
//       <ul className="profile__cards">
//         //{" "}
//         {cards
//           .filter(
//             (card) =>
//               card.owner ===
//               (currentUser.data === undefined ? "" : currentUser.data._id)
//           )
//           .map((card) => (
//             <ClothingCard
//               key={card._id}
//               item={card}
//               onCardClick={onCardClick}
//             />
//           ))}
//       </ul>
//     </div>
//   );
// };

// export default ClothesSection;
