import React from "react";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";

const Profile = () => {
  const items = [
    {
      id: 1,
      name: "Red Jacket",
      weather: "cold",
      link: "https://example.com/image1.jpg",
      owner: "user1",
    },
    {
      id: 2,
      name: "Summer Dress",
      weather: "hot",
      link: "https://example.com/image2.jpg",
      owner: "user1",
    },
    {
      id: 3,
      name: "Blue Sweater",
      weather: "warm",
      link: "https://example.com/image3.jpg",
      owner: "user2",
    },
  ];

  const handleCardClick = (item) => {
    console.log(`Clicked on item with ID ${item.id}`);
  };

  const handleAddClick = () => {
    console.log("Add button clicked");
  };

  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__sidebar">
          <SideBar />
        </div>
        <div className="profile__clothes-section">
          <ClothesSection
            cards={items}
            onCardClick={handleCardClick}
            onAddClick={handleAddClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile




