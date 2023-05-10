import React from "react";
import headerAvatar from "../images/avatar.svg";
import "../blocks/SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <img src={headerAvatar} className="sidebar__avatar" alt="avatar" />
      <div className="sidebar__name">Phillippe Louis</div>
    </div>
  );
};

export default SideBar;
