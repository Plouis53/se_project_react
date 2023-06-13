import React, { useEffect, useState } from "react";
import { HashRouter, Route } from "react-router-dom";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import { getForecastWeather, parseWeatherData } from "../utils/weatherApi";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import ItemModal from "../components/ItemModal";
import Profile from "../components/Profile";
import AddItemModal from "./AddItemModal";
import itemsApi from "../utils/api";
import ProtectedRoute from "./ProtectedRoute";
import { signUp, signIn, checkTokenValidity } from "../utils/auth";
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
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
    // setClothingItems(prevItems);
    // setPrevItems([]);
    // setNewItem({});
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
        itemsApi
          .get()
          .then((response) => {
            setClothingItems(response);
          })
          .catch((error) => {
            console.log("Error adding item:", error);
          });
      })
      .catch((error) => {
        console.log("Error fetching weather data:", error);
      });

    const token = localStorage.getItem("jwt");
    if (token) {
      checkTokenValidity(token)
        .then((data) => {
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.error("Error checking token validity:", error);
          // Handle error scenario or log out the user
        });
    }
  }, []);

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit((currentTempState) => {
      return currentTempState === "C" ? "F" : "C";
    });
  };

  const handleRegistration = (name, email, password) => {
    signUp(name, email, password)
      .then((response) => {
        // Process the response or handle it as needed
        if (response.success) {
          // Registration successful
          setIsLoggedIn(true);
          handleCloseModal();
        } else {
          // Registration failed
          console.log("User registration failed:", response.error);
          // Handle failure scenario
        }
      })
      .catch((error) => {
        console.error("Error occurred during user registration:", error);
        // Handle error scenario
      });
  };

  const handleSignIn = (email, password) => {
    signIn(email, password)
      .then((response) => {
        // Process the response or handle it as needed
        if (response.success) {
          // Sign-in successful
          setIsLoggedIn(true);
          handleCloseModal();
        } else {
          // Sign-in failed
          console.log("User sign-in failed:", response.error);
          // Handle failure scenario
        }
      })
      .catch((error) => {
        console.error("Error occurred during user sign-in:", error);
        // Handle error scenario
      });
  };

  const handleAddItemSubmit = ({ name, imageUrl, weather }) => {
    const newItem = {
      id: Date.now(),
      name,
      imageUrl,
      weather,
    };

    itemsApi
      .add(newItem)
      .then((response) => {
        console.log("Item added successfully:", response);
        setClothingItems((items) => [response, ...items]);
        handleCloseModal();
      })
      .catch((error) => {
        console.log("Error adding item:", error);
      });
  };

  const handleDelete = (itemId) => {
    itemsApi
      .remove(itemId)
      .then(() => {
        console.log("Item deleted successfully");
        setClothingItems((clothingItems) =>
          clothingItems.filter((item) => item.id !== itemId)
        );
        handleCloseModal();
      })
      .catch((error) => {
        console.log("Error deleting item:", error);
      });
  };

  return (
    <div className="page">
      <HashRouter>
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header onCreateModal={handleCreateModal} isLoggedIn={isLoggedIn} />
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              clothingItems={clothingItems}
            />
          </Route>
          {/* <Route path="/profile"> */}
          <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
            <Profile items={clothingItems} onSelectCard={handleSelectedCard} />
            {/* <Route> */}
          </ProtectedRoute>
          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              buttonText="Add garment"
              title="New Garment"
              handleCloseModal={handleCloseModal}
              isOpen={handleCreateModal}
              onAddItem={handleAddItemSubmit}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              onDelete={handleDelete}
              selectedCard={selectedCard}
              onClose={handleCloseModal}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </HashRouter>
    </div>
  );
};

export default App;
