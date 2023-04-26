// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import ModalWithForm from "./ModalWithForm/ModalWithForm";
import ItemModal from "./ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "./utils/weatherApi";
import React, { useEffect, useState } from "react";
import closeIcon from "../src/Images/Union.svg";

function App() {
  const weatherTemp = "75°F";
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleselectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForecastWeather().then((data) => {
      const temperature = parseWeatherData(data);
      setTemp(temperature);
    });
  }, []);

  return (
    <div id="root" className="page">
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={temp} onSelectCard={handleselectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garment" onClose={handleCloseModal}>
          <div className="modal__container-form">
            <form className="modal__form" name="add">
              <fieldset className="modal__fieldset">
                <button
                  type="button"
                  className="modal__button"
                  aria-label="Close"
                >
                  <img
                    className="modal__close"
                    alt="Close button image"
                    src={closeIcon}
                  ></img>
                </button>
                <h2 className="modal__header">New Garment</h2>
                <label className="modal__label">
                  Name
                  <input
                    className="modal__input"
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    id="input-name"
                    miniLength="1"
                    maxLength="30"
                  />
                </label>
                <label className="modal__label">
                  Image
                  <input
                    className="modal__input"
                    type="url"
                    placeholder="Image Link"
                    required
                    name="Image link"
                    id="input-link"
                    miniLength="1"
                    maxLength="30"
                  />
                </label>
                <p className="modal__text">Select the weather type:</p>
                <div className="modal__input-container">
                  <div>
                    <input
                      className="modal__input-button"
                      type="radio"
                      id="hot"
                      value="hot"
                      name="rangeOfTemp"
                    />
                    <label className="modal__temp-ranges">Hot</label>
                  </div>
                  <div>
                    <input
                      className="modal__input-button"
                      type="radio"
                      id="warm"
                      value="warm"
                      name="rangeOfTemp"
                    />
                    <label className="modal__temp-ranges">Warm</label>
                  </div>
                  <div>
                    <input
                      className="modal__input-button"
                      type="radio"
                      id="cold"
                      value="cold"
                      name="rangeOfTemp"
                    />
                    <label className="modal__temp-ranges">Cold</label>
                  </div>
                </div>
                <button
                  className="modal__save"
                  type="submit"
                  aria-label="Save"
                  id="add-save"
                >
                  Add garment
                </button>
              </fieldset>
            </form>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
