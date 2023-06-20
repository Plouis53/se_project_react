import React from "react";
import ModalWithForm from "./ModalWithForm";

const RegisterModal = ({
  onClose,
  handleOutClick,
  handleRegister,
  handleSigninClick,
  isLoading,
}) => {
  const [emailValue, setEmail] = React.useState("");
  const [passwordValue, setPassword] = React.useState("");
  const [nameValue, setNameValue] = React.useState("");
  const [avatarValue, setAvatarValue] = React.useState("");

  const buttonClasses = {
    mainButton: "modal__login",
    altButton: "modal__other",
  };
  const buttonTexts = {
    button: isLoading ? "Saving..." : "Next",
    other: "or Log in",
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const user = {
      avatar: avatarValue,
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    };
    handleRegister(user);
  };

  const onEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const onPasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const onNameChange = (evt) => {
    setNameValue(evt.target.value);
  };

  const onAvatarChange = (evt) => {
    setAvatarValue(evt.target.value);
  };

  React.useEffect(() => {
    setEmail("");
    setPassword("");
    setNameValue("");
    setAvatarValue("");
  }, []);

  return (
    <ModalWithForm
      title="Sign up"
      name="Signup"
      onClose={onClose}
      buttonText={buttonTexts}
      onOutClick={handleOutClick}
      handleSubmit={handleSubmit}
      buttonClass={buttonClasses}
      altButtonClick={handleSigninClick}
    >
      <label className="modal__label">
        Email*
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
        Password*
        <input
          className="modal__input"
          placeholder="Password"
          required
          name="password"
          id="input-Password"
          type="password"
          value={passwordValue}
          onChange={onPasswordChange}
        />
      </label>
      <label className="modal__label">
        Name*
        <input
          className="modal__input"
          type="text"
          placeholder="Name"
          name="name"
          id="input-Name"
          required
          minLength="1"
          maxLength="30"
          value={nameValue}
          onChange={onNameChange}
        />
      </label>
      <label className="modal__label">
        Avatar
        <input
          className="modal__input"
          placeholder="Avatar URL"
          name="avatarUrl"
          id="inputAvatarUrl"
          type="url"
          value={avatarValue}
          onChange={onAvatarChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
