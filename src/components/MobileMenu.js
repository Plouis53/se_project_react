import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import closeIcon from "../images/Union.svg";
import CurrentUserContext from "../contexts/CurrentUserContext";
// import "../blocks/MobileMenu.css";
// import "../blocks/ItemModal.css";

const MobileMenu = ({
  onClose,
  handleClick,
  onOutClick,
  handleSignin,
  handleRegister,
  isLoggedIn,
}) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="menu" onClick={onOutClick}>
      <div className="menu__container">
        <button type="button" className="menu__button" aria-label="Close">
          <img
            className="menu__close"
            alt="Close button"
            src={closeIcon}
            onClick={onClose}
          />
        </button>
        {isLoggedIn ? (
          <>
            <button
              type="button"
              className="menu__add"
              onClick={handleClick}
              aria-label="Add"
            >
              + Add clothes
            </button>
            <NavLink to="/profile" className="menu__link" onClick={onClose}>
              <p className="menu__name">{currentUser.name}</p>
              {currentUser.avatar ? (
                <img
                  className="header__avatar"
                  src={currentUser.avatar}
                  alt="User avatar"
                />
              ) : (
                <p className="header__letter">{currentUser.name[0]}</p>
              )}
            </NavLink>
          </>
        ) : (
          <div className="menu__login-info">
            <button className="menu__sign" onClick={handleRegister}>
              Sign Up
            </button>
            <button className="menu__login" onClick={handleSignin}>
              Log In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
