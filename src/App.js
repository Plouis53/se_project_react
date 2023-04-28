// import logo from "./logo.svg";
import "./App.css";
import "./blocks/Card.css";
import Header from "./components/Header";
import Main from "./Main/Main";
import Footer from "./components/Footer";
import ModalWithForm from "./ModalWithForm/ModalWithForm";
import ItemModal from "./ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "./utils/weatherApi";
import React, { useEffect, useState } from "react";
import "./blocks/page.css";

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
    <div>
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={temp} onSelectCard={handleselectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garment" onClose={handleCloseModal}>
          <fieldset className="modal__fieldset">
            <label className="modal__label">
              Name
              <input
                className="modal__input"
                type="text"
                placeholder="Name"
                required
                name="name"
                id="input-name"
                mini-Length="1"
                max-Length="30"
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
            {/* <button
            className="modal__save"
            type="submit"
            aria-label="Save"
            id="add-save"
          >
            Add garment
          </button> */}
          </fieldset>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal
          selectedCard={selectedCard}
          onClose={handleCloseModal}
          closeIcon={undefined}
        />
      )}
    </div>
  );
}

export default App;
