import React, { useEffect, useState } from "react";
import { HashRouter, Route } from "react-router-dom";
import CurrentTempUnitContext from "../contexts/CurrentTempUnitContext";
import { getForecastWeather, parseWeatherData } from "../utils/weatherApi";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import ModalWithForm from "../components/ModalWithForm";
import ItemModal from "../components/ItemModal";
import Profile from "../components/Profile";
import AddItemModal from "./AddItemModal";
import { defaultClothingItems } from "../utils/Constants";
import "../blocks/App.css";
import "../blocks/Card.css";
import "../blocks/WeatherCard.css";

const App = () => {
  const [currentTempUnit, setCurrentTempUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [newItem, setNewItem] = useState({});
  const [prevItems, setPrevItems] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [weatherImage, setWeatherImage] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  // const [activePopup, setActivePopup] = useState("");
  // const weatherTemp = "75°F";
  const [temp, setTemp] = useState(0);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    // setActivePopup("image");
  };

  const handleAddClick = () => {
    // setActivePopup("add");
  };

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
    setClothingItems(prevItems);
    setPrevItems([]);
    setNewItem({});
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

  const handleToggleSwitch = () => {
    setCurrentTempUnit((currentTempState) => {
      return currentTempState === "C" ? "F" : "C";
    });
  };

  const handleAddItemSubmit = (name, link, weather) => {
    const newItem = {
      id: Date.now(),
      name,
      link,
      weather,
    };

    // setClothingItems((prevItems) => [...prevItems, newItem]);
    // handleCloseModal();
  };

  const handleCardDelete = () => {
    // setClothingItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="page">
      <HashRouter>
        <CurrentTempUnitContext.Provider
          value={{ currentTempUnit, handleToggleSwitch }}
        >
          <Header onCreateModal={handleCreateModal} />
          <Route exact path="/">
            <Main weatherTemp={temp} onSelectCard={handleselectedCard} />
          </Route>
          <Route path="/profile">
            <Profile
              items={defaultClothingItems}
              onSelectCard={handleselectedCard}
            />
          </Route>
          <Footer />
          {activeModal === "create" && (
            <ModalWithForm
              name="add"
              title="New Garment"
              onClose={handleCloseModal}
              onSubmit={handleAddItemSubmit}
            >
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
          {activeModal === "addItem" && (
            <AddItemModal
              onClose={handleCloseModal}
              isOpen={handleCreateModal}
              onAddItem={handleAddItemSubmit}
            />
          )}
        </CurrentTempUnitContext.Provider>
      </HashRouter>
    </div>
  );
};

export default App;
