import React, { useEffect, useState } from "react";
import { HashRouter, Route } from "react-router-dom";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import { getForecastWeather, parseWeatherData } from "../utils/weatherApi";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import ModalWithForm from "../components/ModalWithForm";
import ItemModal from "../components/ItemModal";
import Profile from "../components/Profile";
import AddItemModal from "./AddItemModal";
import { defaultClothingItems } from "../utils/constants";
import "../blocks/App.css";
import "../blocks/Card.css";
import "../blocks/WeatherCard.css";

const App = () => {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [newItem, setNewItem] = useState({});
  const [prevItems, setPrevItems] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [weatherImage, setWeatherImage] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleAddClick = () => {};

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
    setClothingItems(prevItems);
    setPrevItems([]);
    setNewItem({});
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((error) => {});
  }, []);

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit((currentTempState) => {
      return currentTempState === "C" ? "F" : "C";
    });
  };

  const handleAddItemSubmit = (name, link, weatherChange) => {
    const newItem = {
      id: Date.now(),
      name,
      link,
      weather: weatherChange,
    };
    setClothingItems((prevItems) => [...prevItems, newItem]);
    handleCloseModal();
  };

  const handleDelete = (itemId) => {
    setClothingItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  return (
    <div className="page">
      <HashRouter>
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header onCreateModal={handleCreateModal} />
          <Route exact path="/">
            <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
          </Route>
          <Route path="/profile">
            <Profile
              items={[...clothingItems, ...defaultClothingItems]}
              onSelectCard={handleSelectedCard}
            />
          </Route>
          <Footer />
          {activeModal === "create" && (
            <ModalWithForm
              name="add"
              buttonText="Add garment"
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
            <ItemModal
              onDelete={handleDelete}
              selectedCard={selectedCard}
              onClose={handleCloseModal}
            />
          )}
          {activeModal === "addItem" && (
            <AddItemModal
              title="New Garment"
              name="add"
              onClose={handleCloseModal}
              isOpen={handleCreateModal}
              onAddItem={handleAddItemSubmit}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </HashRouter>
    </div>
  );
};

export default App;
