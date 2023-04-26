import React from "react";
import "./Header.css";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function Header({ onCreateModal, temp }) {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../Images/logo.svg").default} alt="logo" />
        </div>
        <div className="header_date" id="currentDate">
          {currentDate}, Atlanta
        </div>
      </div>
      <div className="header__avatar-logo">
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
        <div className="header_name"> Phillippe Louis</div>
        <div>
          <img src={require("../Images/avatar.svg").default} alt="avatar" />
        </div>
      </div>
    </header>
  );
}

export default Header;
