import React from "react";
import "../blocks/Card.css";
import "../blocks/Profile.css";

const ItemCard = ({ item, onSelectCard, currentUser }) => {
  // Check if the item was liked by the current user
  const isLiked = item.likes.some((user) => user._id === currentUser._id);

  // Create a variable which you then set in `className` for the like button
  const itemLikeButtonClassName = `card__like-button ${
    currentUser ? (isLiked ? "card__like-button_active" : "") : "hidden"
  }`;

  const handleCardClick = () => {
    onSelectCard(item);
  };

  return (
    <div className="card">
      <div className="card__container">
        <p className="card__name">{item.name}</p>
        <img
          src={item?.link || item?.imageUrl || ""}
          className="card__image"
          onClick={handleCardClick}
          alt={item.name}
        />
        {currentUser && (
          <button className={itemLikeButtonClassName} aria-label="Like">
            Like
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemCard;

// import React from "react";
// import "../blocks/Card.css";
// import "../blocks/Profile.css";

// const ItemCard = ({ item, onSelectCard }) => {
//   const handleCardClick = () => {
//     onSelectCard(item);
//   };
//   return (
//     <div className="card">
//       <div className="card__container">
//         <p className="card__name">{item.name}</p>
//         <img
//           src={item?.link || item?.imageUrl || ""}
//           className="card__image"
//           onClick={handleCardClick}
//           alt={item.name}
//         />
//       </div>
//     </div>
//   );
// };

// export default ItemCard;
