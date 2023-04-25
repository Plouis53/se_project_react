// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import ModalWithForm from "./ModalWithForm/ModalWithForm";
import React, { useState } from "react";

function App() {
  const weatherTemp = "75°F";
  const [activeModal, setActiveModal] = useState("");

  const handleCreateModal=()=>{
    setActiveModal("create")
  }
  return (
    <div>
      <Header onCreateModal={handleCreateModal}  />
      <Main weatherTemp={weatherTemp} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garment">
          <label>
            Name <input type="text" name="name" minLength="1" maxLength="30" />
          </label>
          <label>
            Image <input type="url" name="link" minLength="1" maxLength="30" />
          </label>
          <p>Select the weather type:</p>
          <div>
            <div>
              <input type="radio" id="hot" value="hot" />
              <label>Hot</label>
            </div>
            <div>
              <input type="radio" id="warm" value="warm" />
              <label>Warm</label>
            </div>
            <div>
              <input type="radio" id="cold" value="cold" />
              <label>Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}
    </div>
  );
}

export default App;
