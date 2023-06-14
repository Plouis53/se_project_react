import React from "react";
import headerAvatar from "../images/avatar.svg";
import "../blocks/SideBar.css";

const SideBar = ({ onProfileClick }) => {
  const handleProfileClick = () => {
    // Logic to handle the profile click event
    if (onProfileClick) {
      onProfileClick();
    }
  };

  return (
    <div className="sidebar" onClick={handleProfileClick}>
      <div className="sidebar__container">
        <img src={headerAvatar} className="sidebar__avatar" alt="avatar" />
        <div className="sidebar__name">Phillippe Louis</div>
      </div>
    </div>
  );
};

export default SideBar;

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
