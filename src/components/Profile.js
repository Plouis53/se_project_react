import React from "react";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import "../blocks/Profile.css";
import "../blocks/Page.css";

const Profile = ({ items, onSelectCard }) => {
  const handleCardClick = (item) => {
    onSelectCard(item);
  };

  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__sidebar">
          <SideBar />
        </div>
        <div className="profile__clothes-section">
          <ClothesSection cards={items} onCardClick={handleCardClick} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
