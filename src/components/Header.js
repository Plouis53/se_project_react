import React from "react";
import "../blocks/Header.css";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function Header({ onCreateModal, temp }) {
  return (
    <header className="header">
      <div className="header__left">
        <a href="#/">
          <img
            className="header__logo"
            src={require("../Images/logo.svg").default}
            alt=" WTWR logo"
          />
        </a>
        <p className="header__date" id="currentDate">
          {currentDate}, Atlanta
        </p>
      </div>
      <div className="header__right">
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
        <p className="header__name"> Phillippe Louis</p>
        <img
          className="header__avatar-logo"
          src={require("../Images/avatar.svg").default}
          alt="avatar"
        />
      </div>
    </header>
  );
}

export default Header;
