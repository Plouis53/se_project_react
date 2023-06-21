import React, { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

const SideBar = ({ isLoggedIn, editClick, SignOutClick }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="profile__sidebar">
      {isLoggedIn && currentUser.data && (
        <div className="profile__info">
          {currentUser.data.avatar ? (
            <img
              className="profile__avatar"
              src={currentUser.data.avatar}
              alt="User avatar"
            />
          ) : (
            <p className="profile__note">{currentUser.data.name[0]}</p>
          )}
          <p className="profile__name">{currentUser.data.name}</p>
        </div>
      )}
      <button className="profile__edit profile__button" onClick={editClick}>
        Change profile data
      </button>
      <button
        className="profile__logout profile__button"
        onClick={SignOutClick}
      >
        Log out
      </button>
    </div>
  );
};

export default SideBar;

// import React from "react";
// import headerAvatar from "../images/avatar.svg";
// import "../blocks/SideBar.css";

// const SideBar = ({ onProfileClick }) => {
//   const handleProfileClick = () => {
//     // Logic to handle the profile click event
//     if (onProfileClick) {
//       onProfileClick();
//     }
//   };

//   return (
//     <div className="sidebar" onClick={handleProfileClick}>
//       <div className="sidebar__container">
//         <img src={headerAvatar} className="sidebar__avatar" alt="avatar" />
//         <div className="sidebar__name">Phillippe Louis</div>
//       </div>
//     </div>
//   );
// };

// export default SideBar;

// 61323import React from "react";
// import headerAvatar from "../images/avatar.svg";
// import "../blocks/SideBar.css";

// const SideBar = () => {
//   return (
//     <div className="sidebar">
//       <div className="sidebar__container">
//         <img src={headerAvatar} className="sidebar__avatar" alt="avatar" />
//         <div className="sidebar__name">Phillippe Louis</div>
//       </div>
//     </div>
//   );
// };

// export default SideBar;
