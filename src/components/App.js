// import "../blocks/App.css";
import "../blocks/Card.css";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import ModalWithForm from "../components/ModalWithForm";
import ItemModal from "../components/ItemModal";
import { getForecastWeather, weatherData } from "../utils/weatherApi";
import "../blocks/WeatherCard.css";
import React, { useEffect, useState } from "react";
import CurrentTempUnitContext from "../contexts/CurrentTempUnitContext";

const App = () => {
  const [currentTempUnit, setCurrentTempUnit] = useState("F");
  const [forcastData, setForcastData] = useState([]);
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [activePopup, setActivePopup] = useState("");
  const weatherTemp = "75°F";
  const [temp, setTemp] = useState(0);

  const handleAddClick = () => {
    setActivePopup("add");
  };

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
        const temperature = weatherData(data);
        setTemp(temperature);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleToggleSwitch = () => {
    CurrentTempUnitContext === "F"
      ? setCurrentTempUnit("C")
      : setCurrentTempUnit("F");
  };

  return (
    <div className="page">
      <CurrentTempUnitContext.Provider
        value={{ currentTempUnit, handleToggleSwitch }}
      >
        <Header
          handleClick={() => setActiveModal("create")}
          forcastData={forcastData}
          onCreateModal={handleCreateModal}
        />
        {/* <Routes>

        <Routes exact path={} element={forcastData.temperature &&} >  */}

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
      </CurrentTempUnitContext.Provider>
    </div>
  );
};

export default App;
