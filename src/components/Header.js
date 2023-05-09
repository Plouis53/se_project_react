import React from "react";
import "../blocks/Header.css";
import headerLogo from "../images/logo.svg";
import headerAvatar from "../images/avatar.svg";
import ToggleSwitch from "../components/ToggleSwitch";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

const Header = ({ onCreateModal }) => {
  return (
    <header className="header">
      <div className="header__left">
        <NavLink exact to="/">
          <img className="header__logo" src={headerLogo} alt=" WTWR logo"></img>
        </NavLink>
        <p className="header__date" id="currentDate">
          {currentDate}, Atlanta
        </p>
      </div>
      <div className="header__right">
        <div className="header__avatar">
          <ToggleSwitch />
          <div>
            <button
              type="button"
              onClick={onCreateModal}
              className="header__add"
              aria-label="Add"
            >
              + Add clothes
            </button>
          </div>
          <NavLink to="/profile" className="header__link">
            <div className="header__name"> Phillippe Louis</div>
          </NavLink>
          <NavLink to="/profile">
            <div>
              <img
                className="header__avatar-image"
                src={headerAvatar}
                alt="avatar"
              />
            </div>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
