import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, useHistory } from "react-router-dom";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import { getForecastWeather, parseWeatherData } from "../utils/weatherApi";
import Header from "./Header";
import Main from "./Main";
import Footer from "../components/Footer";
import ModalWithImage from "./ModalWithImage";
import ModalWithDeleteConfirm from "./ModalWithDeleteConfirm";
import Profile from "../components/Profile";
import AddItemModal from "./AddItemModal";
import { itemsApi, userApi } from "../utils/api";
import ProtectedRoute from "./ProtectedRoute";
import { checkTokenValidity } from "../utils/auth";
import CurrentUserContext from "../contexts/CurrentUserContext";
import * as auth from "../utils/auth";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import MobileMenu from "./MobileMenu";
import LogoutModal from "./LogoutModal";
import EditModal from "./EditModal";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import "../blocks/App.css";
import "../blocks/Card.css";
import "../blocks/WeatherCard.css";
import "../blocks/MobileMenu.css";
import "../blocks/ModalConfirm.css";

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
  const [currentUser, setCurrentUser] = React.useState({});
  const [token, setToken] = React.useState("");
  const history = useHistory();
  const [isLoading, setIsLoading] = React.useState(false);
  const handleSignIn = ({ email, password }) => {
    setIsLoading(true);

    auth
      .signIn({ email, password })
      .then((data) => {
        if (data.token) {
          return auth.checkTokenValidity(data.token);
        }
      })
      .then((response) => {
        setCurrentUser(response.data);
        setIsLoggedIn(true);
        history.push("/profile");
      })
      .catch((error) => console.log(error))
      .finally(() => {
        handleCloseModal(); // Without this, signin modal will not close
        setIsLoading(false);
      });
  };

  const handleRegister = (user) => {
    setIsLoading(true);

    auth
      .signUp(user)
      .then((response) => {
        if (response) {
          setCurrentUser(response.data);
          handleSignIn(user);
        } else {
          console.log("User registration failed:", response.error);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        // handleCloseModal();
        setIsLoading(false);
      });
  };

  const handleSignout = () => {
    setCurrentUser({});
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("image");
  };

  const handleAddClick = () => {
    setActiveModal("add");
  };

  const handleCancel = () => {
    setActiveModal("image");
  };

  const handleSigninClick = () => {
    setActiveModal("login");
  };

  const handleSignoutClick = () => {
    setActiveModal("logout");
  };

  const handleEditClick = () => {
    setActiveModal("edit");
  };

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const handleMobileClick = () => {
    setActiveModal("mobile");
  };

  const handleDeleteClick = (card) => {
    itemsApi
      .remove(card._id)
      .then(() => {
        console.log("Item deleted successfully");
        setClothingItems((clothingItems) =>
          clothingItems.filter((item) => item._id !== card._id)
        );
        // handleCloseModal();
        setActiveModal("");
      })

      .catch((error) => {
        console.log("Error deleting item:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleOutClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      handleCreateModal();
    }
  };

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", closeByEscape);

    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  const handleSelectedCard = (card) => {
    setActiveModal("image");
    setSelectedCard(card);
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit((currentTempState) => {
      return currentTempState === "C" ? "F" : "C";
    });
  };

  const handleAddItemSubmit = ({ card }) => {
    const { name, imageUrl, weather } = card;
    setIsLoading(true);

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
        setClothingItems((items) => [response.data, ...items]);
        handleCloseModal();
      })
      .catch((error) => {
        console.log("Error adding item:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleEditSubmit = ({ name, avatarUrl }) => {
    setIsLoading(true);
    userApi
      .updateCurrentUser({ name, avatarUrl })
      .then((data) => {
        // setIsLoading(false);
        setCurrentUser(data);
        // handleCloseModal();
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false); // Set isLoading to false in the finally block
        handleCloseModal(); // Close the popup regardless of success or error
      });
  };

  const handleSubmit = (request) => {
    setIsLoading(true); // Start loading

    request()
      .then(() => {
        handleCloseModal(); // Close modal on successful request
      })
      .catch((error) => {
        console.error(error); // Handle and log errors
      })
      .finally(() => {
        setIsLoading(false); // Stop loading
      });
  };

  const handleDelete = (itemId) => {
    setActiveModal("confirm");
  };

  const handleLikeClick = (id, isLiked) => {
    const token = localStorage.getItem("jwt");

    if (isLiked) {
      itemsApi
        .unlike(id)
        .then(({ data: updatedCard }) => {
          setClothingItems((prevItems) =>
            prevItems.map((item) => (item._id === id ? updatedCard : item))
          );
        })
        .catch((err) => console.log(err));
    } else {
      itemsApi
        .like(id)
        .then((updatedCard) => {
          setClothingItems((prevItems) =>
            prevItems.map((item) => (item._id === id ? updatedCard : item))
          );
        })
        .catch((err) => console.log(err));
    }
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
        .then((res) => {
          setIsLoggedIn(true);
          setCurrentUser(res.data);
        })
        .catch((error) => {
          console.error("Error checking token validity:", error);
        });
    }
  }, []);

  return (
    <BrowserRouter>
      <CurrentUserContext.Provider value={currentUser}>
        <CurrentTemperatureUnitContext.Provider
          value={{
            currentTemperatureUnit,
            handleToggleSwitchChange,
            parseWeatherData,
          }}
        >
          <Header
            parseWeatherData={parseWeatherData}
            handleClick={handleAddClick}
            handleMobile={handleMobileClick}
            handleSignIn={handleSigninClick}
            handleRegister={handleRegisterClick}
            isLoggedIn={isLoggedIn}
          />
          <Switch>
            <Route exact path="/">
              <Main
                weatherTemp={temp}
                onSelectCard={handleSelectedCard}
                clothingItems={clothingItems}
                isLoggedIn={isLoggedIn}
                onCardLike={handleLikeClick}
                onCardUnlike={handleLikeClick}
              />
            </Route>
            <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
              <Profile
                items={clothingItems}
                onCardClick={handleCardClick}
                onAddClick={handleAddClick}
                isLoggedIn={isLoggedIn}
                editClick={handleEditClick}
                logoutClick={handleSignoutClick}
                onLike={handleLikeClick}
                onUnlike={handleLikeClick}
              />
            </ProtectedRoute>
          </Switch>
          <Footer />
          {activeModal === "add" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              isOpen={handleCreateModal}
              onAddItem={handleAddItemSubmit}
              handleOutClick={handleOutClick}
              token={token}
              isLoading={isLoading}
            />
          )}
          {activeModal === "image" && (
            <ModalWithImage
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              onDeleteClick={handleDelete}
              onOutClick={handleOutClick}
              isLoggedIn={isLoggedIn}
            />
          )}
          {activeModal === "confirm" && (
            <ModalWithDeleteConfirm
              onClose={handleCloseModal}
              onOutClick={handleOutClick}
              onCancel={handleCancel}
              onDelete={handleDeleteClick}
              card={selectedCard}
              isLoading={isLoading}
            />
          )}
          {activeModal === "mobile" && (
            <MobileMenu
              onClose={handleCloseModal}
              onOutClick={handleOutClick}
              handleClick={handleAddClick}
              isLoggedIn={isLoggedIn}
              handleSignin={handleSigninClick}
              handleRegister={handleRegisterClick}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              onClose={handleCloseModal}
              handleRegisterClick={handleRegisterClick}
              handleOutClick={handleOutClick}
              handleSignin={handleSignIn}
              isLoading={isLoading}
            />
          )}
          {activeModal === "register" && (
            <RegisterModal
              onClose={handleCloseModal}
              handleOutClick={handleOutClick}
              handleSigninClick={handleSigninClick}
              isLoading={isLoading}
              handleRegister={handleRegister}
            />
          )}
          {activeModal === "edit" && (
            <EditModal
              handleCloseModal={handleCloseModal}
              handleOutClick={handleOutClick}
              handleEdit={handleEditSubmit}
              isLoading={isLoading}
            />
          )}
          {activeModal === "logout" && (
            <LogoutModal
              handleCloseModal={handleCloseModal}
              handleOutClick={handleOutClick}
              logout={handleSignout}
            />
          )}
          {activeModal === "mobile" && (
            <MobileMenu
              onClose={handleCloseModal}
              onOutClick={handleOutClick}
              handleClick={handleAddClick}
              isLoggedIn={isLoggedIn}
              handleSignin={handleSigninClick}
              handleRegister={handleRegisterClick}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </CurrentUserContext.Provider>
    </BrowserRouter>
  );
};

export default App;

function updateCurrentUser(arg0, token) {
  throw new Error("Function not implemented.");
}
