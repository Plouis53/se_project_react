import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm";

const LoginModal = ({
  onClose,
  handleOutClick,
  handleSignin,
  handleRegisterClick,
  isLoading,
}) => {
  const [emailValue, setEmail] = useState("");
  const [passwordValue, setPassword] = useState("");

  const buttonClasses = {
    mainButton: "modal__login",
    altButton: "modal__other",
  };
  const buttonTexts = {
    button: isLoading ? "Saving..." : "Log in",
    other: "or Register",
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!emailValue || !passwordValue) {
      return;
    }

    handleSignin(emailValue, passwordValue);
  };

  const onEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const onPasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  React.useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  return (
    <ModalWithForm
      title="Log in"
      name="Login"
      onClose={onClose}
      buttonText={buttonTexts}
      onOutClick={handleOutClick}
      handleSubmit={handleSubmit}
      buttonClass={buttonClasses}
      // altButtonClick={handleSigninClick}
      // title="Log in"
      // name="Login"
      // onClose={onClose}
      // buttonText={buttonTexts}
      // onOutClick={handleOutClick}
      // handleSubmit={handleSubmit}
      // buttonClass={buttonClasses}
      // altButtonClick={handleRegisterClick}
    >
      <label className="modal__label">
        Email
        <input
          className="modal__input"
          type="email"
          placeholder="Email"
          required
          name="email"
          id="inputEmail"
          minLength="1"
          maxLength="30"
          value={emailValue}
          onChange={onEmailChange}
        />
      </label>
      <label className="modal__label">
        Password
        <input
          className="modal__input"
          placeholder="Password"
          required
          name="password"
          id="inputPassword"
          type="password"
          value={passwordValue}
          onChange={onPasswordChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;

// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");

// const handleLogin = () => {
//   // Call the onLogin callback with the email and password
//   onLogin(email, password);
// };

//   return (
//     <div className="modal">
//       <h2>Login</h2>
//       <form>
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="button" onClick={handleLogin}>
//           Login
//         </button>
//       </form>
//       <button type="button" onClick={onClose}>
//         Close
//       </button>
//     </div>
//   );
// };

// export default LoginModal;

// 61323 import React, { useState } from "react";

// const LoginModal = ({ onSignIn }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSignIn(email, password);
//   };

//   return (
//     <div className="modal">
//       <div className="modal__content">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;
