// import "../blocks/App.css";
import "../blocks/Card.css";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import ModalWithForm from "../components/ModalWithForm";
import ItemModal from "../components/ItemModal";
import { getForecastWeather, parseWeatherData } from "../utils/weatherApi";
import "../blocks/WeatherCard.css";
import React, { useEffect, useState } from "react";

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
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((error) => {
        console.log(error);
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
                // miniLength="1"
                // maxLength="30"
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
          </fieldset>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
