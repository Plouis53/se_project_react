import React, { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import heart from "../images/Heart.svg";
import filledHeart from "../images/filledHeart.svg";
import "../blocks/Card.css";
import "../blocks/Profile.css";

const ItemCard = ({ item, onSelectCard, onLike, onUnlike, isLoggedIn }) => {
  const currentUser = useContext(CurrentUserContext);
  const isLiked =
    item.likes && item.likes.some((user) => user === currentUser._id);

  const handleLike = () => {
    if (isLiked) {
      onUnlike(item._id, isLiked);
    } else {
      onLike(item._id, isLiked);
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
      </div>
    </div>
  );
};

export default ItemCard;
