import React from "react";
import "../blocks/Header.css";
import "../blocks/Page.css";

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
            src={require("../images/logo.svg").default}
            alt=" WTWR logo"
          />
        </a>
        <p className="header__date" id="currentDate">
          {currentDate}, Atlanta
        </p>
      </div>
      {/* <button
        className="header__button"
        type="button"
        aria-label="mobile-menu"
      ></button>
      <img src={require("../Images/header-button.svg").default}></img> */}
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
          <div className="header__name"> Phillippe Louis</div>
          <div>
            <img src={require("../images/avatar.svg").default} alt="avatar" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
