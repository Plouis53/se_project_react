import React, { useContext } from "react";
import "../blocks/Header.css";
import headerLogo from "../images/logo.svg";
// import headerAvatar from "../images/avatar.svg";
import ToggleSwitch from "./TempSwitch";
import { NavLink, useHistory } from "react-router-dom";
import headerButton from "../images/header-button.svg";
import CurrentUserContext from "../contexts/CurrentUserContext";

const Header = ({
  parseWeatherData,
  handleSignIn,
  handleRegister,
  isLoggedIn,
  handleClick,
  handleMobile,
}) => {
  const currentUser = useContext(CurrentUserContext);

  const userData = currentUser.data
    ? currentUser.data
    : { name: "", avatar: "" };

  if (!parseWeatherData) return null;

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

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
      <button
        className="header__button"
        type="button"
        aria-label="mobile menu"
        onClick={handleMobile}
      >
        <img
          src={headerButton}
          className="header__mobile-menu"
          alt="Header Mobile Menu"
        />
      </button>
      <div className="header__right">
        <ToggleSwitch />
        {isLoggedIn ? (
          <div>
            <button
              type="button"
              onClick={handleClick}
              className="header__add"
              aria-label="Add"
            >
              + Add clothes
            </button>
            <NavLink to="/profile" className="header__link">
              <p className="header__name">{userData.name}</p>
              {userData.avatar ? (
                <img
                  className="header__avatar"
                  src={userData.avatar}
                  alt="User avatar"
                />
              ) : (
                <p className="header__info">{userData.name[0]}</p>
              )}
            </NavLink>
          </div>
        ) : (
          <div className="header__login-info">
            <button className="header__signup" onClick={handleRegister}>
              Sign Up
            </button>
            <button className="header__login" onClick={handleSignIn}>
              Log In
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

//   return (
//     <header className="header">
//       <div className="header__left">
//         <NavLink exact to="/">
//           <img className="header__logo" src={headerLogo} alt=" WTWR logo"></img>
//         </NavLink>
//         <p className="header__date" id="currentDate">
//           {currentDate}, Atlanta
//         </p>
//       </div>
//       <button className="header__button" type="button" aria-label="mobile menu">
//         <img
//           src={headerButton}
//           className="header__mobile-menu"
//           alt="Header Mobile Menu"
//         />
//       </button>
//       <div className="header__right">
//         <div className="header__avatar">
//           <ToggleSwitch />
//           <div>
//             <button
//               type="button"
//               onClick={handleClick}
//               className="header__add"
//               aria-label="Add"
//             >
//               + Add clothes
//             </button>
//           </div>
//           {isLoggedIn ? (
//             <>
//               <NavLink to="/profile" className="header__link">
//                 <div className="header__name">Phillippe Louis</div>
//               </NavLink>
//               <NavLink to="/profile">
//                 <div>
//                   <img
//                     className="header__avatar-image"
//                     src={headerAvatar}
//                     alt="avatar"
//                   />
//                 </div>
//               </NavLink>
//               <button
//                 className="header__sign-out"
//                 onClick={handleSignOut}
//                 aria-label="Sign Out"
//               >
//                 Sign Out
//               </button>
//             </>
//           ) : (
//             <NavLink to="/signin" className="header__link">
//               <div className="header__name">Sign In</div>
//             </NavLink>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useContext } from "react";
// import headerLogo from "../images/logo.svg";
// import ToggleSwitch from "./TempSwitch";
// import { NavLink } from "react-router-dom";
// import headerButton from "../images/header-button.svg";
// import CurrentUserContext from "../contexts/CurrentUserContext";
// import "../blocks/Header.css";

// // const currentDate = new Date().toLocaleString("default", {
// //   month: "long",
// //   day: "numeric",
// // });

// const Header = ({
//   parseWeatherData,
//   handleLogin,
//   handleRegister,
//   isLoggedIn,
//   handleClick,
//   handleMobile,
// }) => {
//   const currentUser = useContext(CurrentUserContext);
//   const userData = currentUser.data
//     ? currentUser.data
//     : { name: "", avatar: "" };

//   if (!parseWeatherData) return null;
//   const currentDate = new Date().toLocaleString("default", {
//     month: "long",
//     day: "numeric",
//   });

//   // const history = useHistory();

//   // const handleSignOut = () => {
//   //   // Perform sign out actions
//   //   onSignOut();
//   //   history.push("/"); // Redirect to the main page after sign out
//   // };

//   return (
//     <header className="header">
//       <div className="header__left">
//         <NavLink exact to="/">
//           <img className="header__logo" src={headerLogo} alt=" WTWR logo"></img>
//         </NavLink>
//         <p className="header__date" id="currentDate">
//           {currentDate}, Atlanta
//         </p>
//       </div>
//       <button
//         className="header__button"
//         type="button"
//         aria-label="mobile menu"
//         onClick={handleMobile}
//       >
//         <img
//           src={headerButton}
//           className="header__mobile-menu"
//           alt="Header Mobile Menu"
//         />
//       </button>
//       <div className="header__right">
//         <ToggleSwitch />
//         {isLoggedIn ? (
//           <div>
//             <button
//               type="button"
//               onClick={handleClick}
//               className="header__add"
//               aria-label="Add"
//             >
//               + Add clothes
//             </button>
//             <NavLink to="/profile" className="header__link">
//               <p className="header__name">{userData.name}</p>
//               {userData.avatar ? (
//                 <img
//                   className="header__avatar"
//                   src={userData.avatar}
//                   alt="User avatar"
//                 />
//               ) : (
//                 <p className="header__info">{userData.name[0]}</p>
//               )}
//             </NavLink>
//           </div>
//         ) : (
//           <div className="header__login-info">
//             <button className="header__signup" onClick={handleRegister}>
//               Sign Up
//             </button>
//             <button className="header__login" onClick={handleLogin}>
//               Log In
//             </button>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

/* {/* </div>
          {isLoggedIn ? (
            <>
              <NavLink to="/profile" className="header__link">
                <p className="header__name">{userData.name}</p>{userData.avatar ?( 
              // </NavLink>
              <NavLink to="/profile">
                  <img
                    className="header__avatar-image"
                    src={userData.avatar}
                    alt="User avatar"
                  />
                  ) : (
              </NavLink>
              <button
                className="header__sign-out"
                // onClick={handleSignOut}
                aria-label="Sign Out"
              >
                Sign Out
              </button>
            // </>
          ) : (
            <NavLink to="/signin" className="header__link">
              <div className="header__name">Sign In</div>
            </NavLink>
          )}
        // </div>
//       {/* </div> }*/
// //     {/* // </header> */} */}
// //   );
// // };

// export default Header;

// import React, { useContext } from "react";
// import "../blocks/Header.css";
// import headerLogo from "../images/logo.svg";
// import headerButton from "../images/header-button.svg";
// import ToggleSwitch from "./TempSwitch";
// import { NavLink } from "react-router-dom";
// import CurrentUserContext from "../contexts/CurrentUserContext";

// const currentDate = new Date().toLocaleString("default", {
//   month: "long",
//   day: "numeric",
// });

// const Header = ({ onCreateModal }) => {
//   const { currentUser } = useContext(CurrentUserContext);

//   const renderAvatar = () => {
//     if (currentUser && currentUser.avatar) {
//       return (
//         <NavLink to="/profile" className="header__link">
//           <div className="header__name">{currentUser.name}</div>
//           <div>
//             <img
//               className="header__avatar-image"
//               src={currentUser.avatar}
//               alt="avatar"
//             />
//           </div>
//         </NavLink>
//       );
//     } else if (currentUser) {
//       const initials = currentUser.name.charAt(0).toUpperCase();
//       return (
//         <NavLink to="/profile" className="header__link">
//           <div className="header__avatar-placeholder">{initials}</div>
//         </NavLink>
//       );
//     } else {
//       return (
//         <NavLink to="/signin" className="header__link">
//           Sign In
//         </NavLink>
//       );
//     }
//   };

//   return (
//     <header className="header">
//       <div className="header__left">
//         <NavLink exact to="/">
//           <img className="header__logo" src={headerLogo} alt="WTWR logo" />
//         </NavLink>
//         <p className="header__date" id="currentDate">
//           {currentDate}, Atlanta
//         </p>
//       </div>
//       <button className="header__button" type="button" aria-label="mobile menu">
//         <img
//           src={headerButton}
//           className="header__mobile-menu"
//           alt="Header Mobile Menu"
//         />
//       </button>
//       <div className="header__right">
//         <div className="header__avatar">
//           <ToggleSwitch />
//           <div>
//             <button
//               type="button"
//               onClick={onCreateModal}
//               className="header__add"
//               aria-label="Add"
//             >
//               + Add clothes
//             </button>
//           </div>
//           {renderAvatar()}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React from "react";
// import "../blocks/Header.css";
// import headerLogo from "../images/logo.svg";
// import headerAvatar from "../images/avatar.svg";
// import ToggleSwitch from "./TempSwitch";
// import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
// import headerButton from "../images/header-button.svg";

// const currentDate = new Date().toLocaleString("default", {
//   month: "long",
//   day: "numeric",
// });

// const Header = ({ onCreateModal }) => {
//   return (
//     <header className="header">
//       <div className="header__left">
//         <NavLink exact to="/">
//           <img className="header__logo" src={headerLogo} alt=" WTWR logo"></img>
//         </NavLink>
//         <p className="header__date" id="currentDate">
//           {currentDate}, Atlanta
//         </p>
//       </div>
//       <button className="header__button" type="button" aria-label="mobile menu">
//         <img
//           src={headerButton}
//           className="header__mobile-menu"
//           alt="Header Mobile Menu"
//         />
//       </button>
//       <div className="header__right">
//         <div className="header__avatar">
//           <ToggleSwitch />
//           <div>
//             <button
//               type="button"
//               onClick={onCreateModal}
//               className="header__add"
//               aria-label="Add"
//             >
//               + Add clothes
//             </button>
//           </div>
//           <NavLink to="/profile" className="header__link">
//             <div className="header__name"> Phillippe Louis</div>
//           </NavLink>
//           <NavLink to="/profile">
//             <div>
//               <img
//                 className="header__avatar-image"
//                 src={headerAvatar}
//                 alt="avatar"
//               />
//             </div>
//           </NavLink>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
