import React from "react";
import "../blocks/Header.css";
import headerLogo from "../images/logo.svg";
import headerAvatar from "../images/avatar.svg";
import { Link } from "react-router-dom";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function Header({ onCreateModal, temp }) {
  return (
    <header className="header">
      <div className="header__left">
        <img className="header__logo" src={headerLogo} alt=" WTWR logo"></img>
        <p className="header__date" id="currentDate">
          {currentDate}, Atlanta
        </p>
      </div>
      <div className="header__right">
        <div className="header__avatar">
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
          <Link className="header__link">
            <div className="header__name"> Phillippe Louis</div>
          </Link>
          <div>
            <img
              className="header__avatar-image"
              src={headerAvatar}
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
