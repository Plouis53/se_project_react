// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import ModalWithForm from "./ModalWithForm/ModalWithForm";
import React from "react";

function App() {
  const weatherTemp = "75°F";
  return (
    <div>
      <Header onCreateModal={undefined} />
      <Main weatherTemp={weatherTemp} />
      <Footer />
      <ModalWithForm title="New Garment">These are the children</ModalWithForm>
    </div>
  );
}

export default App;
