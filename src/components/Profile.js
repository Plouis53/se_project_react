import React from "react";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";

const Profile = ({
  items,
  onCardClick,
  onAddClick,
  isLoggedIn,
  editClick,
  logoutClick,
  onLike,
}) => {
  return (
    <section className="profile">
      <div className="profile__content">
        {isLoggedIn && (
          <div className="profile__info">
            {/* Render the profile information */}
          </div>
        )}
        <SideBar
          isLoggedIn={isLoggedIn}
          editClick={editClick}
          logoutClick={logoutClick}
        />
        <ClothesSection
          cards={items}
          onCardClick={onCardClick}
          onAddClick={onAddClick}
          isLoggedIn={isLoggedIn}
          onLike={onLike}
        />
      </div>
    </section>
  );
};

export default Profile;

// import React from "react";
// import SideBar from "./SideBar";
// import ClothesSection from "./ClothesSection";
// import EditProfileModal from "./EditProfileModal";
// import "../blocks/Profile.css";
// import "../blocks/Page.css";

// const Profile = ({ items, onSelectCard, onAddClick, currentUser, onClose, isLoggedIn, onCardClick }) => {
//   const handleCardClick = (item) => {
//     onSelectCard(item);
//   };

//   const handleUpdateProfile = (name, avatarUrl) => {
//     // Update the user's profile data using the provided name and avatarUrl
//     // Replace this with your actual API call to update the user's profile data
//     console.log(`Updating profile: name=${name}, avatarUrl=${avatarUrl}`);
//   };

//   return (
//     <div className="profile">
//       <div className="profile__container">
//         <div className="profile__sidebar">
//           <SideBar
//             currentUser={currentUser}
//             isLoggedIn={isLoggedIn}
//             onUpdateProfile={handleUpdateProfile}
//             onClose={onClose}
//           />
//         </div>
//         <div className="profile__clothes-section">
//           <ClothesSection
//             cards={items}
//             onCardClick={handleCardClick}
//             onAddClick={onAddClick}
//           />
//         </div>
//       </div>
//       <EditProfileModal
//         onUpdateProfile={handleUpdateProfile}
//         currentUser={currentUser}
//         onClose={onClose}
//       />
//     </div>
//   );
// };

// export default Profile;

// 61323 import React from "react";
// import SideBar from "./SideBar";
// import ClothesSection from "./ClothesSection";
// import EditProfileModal from "./EditProfileModal";
// import "../blocks/Profile.css";
// import "../blocks/Page.css";
// // import CurrentUserContext from "../contexts/CurrentUserContext";

// const Profile = ({ items, onSelectCard, onAddClick, currentUser, onClose }) => {
//   const handleCardClick = (item) => {
//     onSelectCard(item);
//   };

//   const handleUpdateProfile = (name, avatarUrl) => {
//     // Update the user's profile data using the provided name and avatarUrl
//     // Replace this with your actual API call to update the user's profile data
//     console.log(`Updating profile: name=${name}, avatarUrl=${avatarUrl}`);
//   };

//   return (
//     <div className="profile">
//       <div className="profile__container">
//         <div className="profile__sidebar">
//           <SideBar />
//         </div>
//         <div className="profile__clothes-section">
//           <ClothesSection
//             cards={items}
//             onCardClick={handleCardClick}
//             onAddClick={onAddClick}
//           />
//         </div>
//       </div>
//       <EditProfileModal
//         onUpdateProfile={handleUpdateProfile}
//         currentUser={currentUser}
//         onClose={onClose}
//       />
//     </div>
//   );
// };

// export default Profile;

// import React from "react";
// import SideBar from "./SideBar";
// import ClothesSection from "./ClothesSection";
// import "../blocks/Profile.css";
// import "../blocks/Page.css";

// const Profile = ({ items, onSelectCard }) => {
//   const handleCardClick = (item) => {
//     onSelectCard(item);
//   };

//   return (
//     <div className="profile">
//       <div className="profile__container">
//         <div className="profile__sidebar">
//           <SideBar />
//         </div>
//         <div className="profile__clothes-section">
//           <ClothesSection cards={items} onCardClick={handleCardClick} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
