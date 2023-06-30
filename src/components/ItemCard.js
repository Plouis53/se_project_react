import React, { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import heart from "../images/heart.svg";
import filledHeart from "../images/filledHeart.svg";
import "../blocks/Card.css";
import "../blocks/Profile.css";

const ItemCard = ({ item, onSelectCard, onLike, onUnlike, isLoggedIn }) => {
  const currentUser = useContext(CurrentUserContext);
  const isLiked =
    item.likes && item.likes.some((user) => user._id === currentUser._id);

  // const handleLike = () => {
  //   if (isLiked) {
  //     onUnlike(item._id, currentUser);
  //   } else {
  //     onLike({ id: item._id, isLiked, user: currentUser });
  //   }
  // };

  const handleLike = () => {
    if (isLiked) {
      onUnlike(item._id);
    } else {
      onLike(item._id);
    }
  };

  const onClick = () => {
    onSelectCard(item);
  };

  return (
    <div className="card">
      <div className="card__container">
        <p className="card__name">{item.name}</p>
        <img
          src={item?.link || item?.imageUrl || ""} //review it later 
          className="card__image"
          onClick={onClick}
          alt={item.name}
        />
        {isLoggedIn ? (
          <img
            src={isLiked ? filledHeart : heart}
            alt="like button"
            className={isLiked ? "card__unlike-button" : "card__like-button"}
            onClick={handleLike}
          />
        ) : null}
        {/* {isLoggedIn ? (
          <img
            src={isLiked || heart}
            alt="like button"
            className="card__like-button"
            onClick={handleLike}
          />
        ) : null}
        {isLoggedIn ? (
          <img
            src={isLiked || filledHeart}
            alt="like button"
            className="card__unlike-button"
            onClick={handleLike}
          />
        ) : null} */}
      </div>
    </div>
  );
};

export default ItemCard;

// 6/28/23 import React, { useContext } from "react";
// import CurrentUserContext from "../contexts/CurrentUserContext";
// import heart from "../images/heart.svg";
// import filledHeart from "../images/filledHeart.svg";
// import "../blocks/Card.css";
// import "../blocks/Profile.css";

// const ItemCard = ({ item, onSelectCard, onLike, isLoggedIn }) => {
//   const currentUser = useContext(CurrentUserContext);
//   const isLiked =
//     item.likes && item.likes.some((user) => user._id === currentUser._id);

//   const handleLike = () => {
//     console.log(item);
//     if (item._id) {
//       onLike(item._id, isLiked, currentUser);
//     }
//   };

//   const onClick = () => {
//     console.log(item);
//     onSelectCard(item);
//   };
//   // console.log(isLoggedIn);
//   return (
//     <div className="card">
//       <div className="card__container">
//         <p className="card__name">{item.name}</p>
//         <img
//           src={item?.link || item?.imageUrl || ""}
//           className="card__image"
//           onClick={onClick}
//           alt={item.name}
//         />
//         {isLoggedIn ? (
//           <img
//             src={isLiked ? filledHeart : heart}
//             alt="like button"
//             className="card__like-button"
//             onClick={handleLike}
//           />
//         ) : // {/* ) : null} */}
//         null}
//       </div>
//     </div>
//   );
// };

// export default ItemCard;

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
