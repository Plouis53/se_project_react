import React, { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import Heart from "../images/Heart.svg";
import FullHeart from "../images/Fullheart.svg";
import "../blocks/Card.css";
import "../blocks/Profile.css";

const ItemCard = ({ item, onSelectCard, onLike, isLoggedIn }) => {
  const currentUser = useContext(CurrentUserContext);
  const isLiked =
    item.likes && item.likes.some((user) => user._id === currentUser._id);

  const handleLike = () => {
    onLike(item._id, isLiked, currentUser);
  };

  const handleCardClick = () => {
    onSelectCard(item);
  };
  // console.log(isLoggedIn);
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
        {/* {isLoggedIn ? ( */}
          <img
            src={isLiked ? FullHeart : Heart}
            alt="like button"
            className="card__like-button"
            onClick={handleLike}
          />
        {/* ) : null} */}
      </div>
    </div>
  );
};

export default ItemCard;

// 61323import React from "react";
// import "../blocks/Card.css";
// import "../blocks/Profile.css";

// const ItemCard = ({ item, onSelectCard, currentUser }) => {
//   // Check if the item was liked by the current user
//   const isLiked = item.likes.some((user) => user._id === currentUser._id);

//   // Create a variable which you then set in `className` for the like button
//   const itemLikeButtonClassName = `card__like-button ${
//     currentUser ? (isLiked ? "card__like-button_active" : "") : "hidden"
//   }`;

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
//         {currentUser && (
//           <button className={itemLikeButtonClassName} aria-label="Like">
//             Like
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ItemCard;

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
