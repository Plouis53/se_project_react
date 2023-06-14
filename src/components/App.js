import React, { useEffect, useState } from "react";
import { HashRouter, Route, useHistory } from "react-router-dom";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import { getForecastWeather, parseWeatherData } from "../utils/weatherApi";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import ItemModal from "../components/ItemModal";
import Profile from "../components/Profile";
import AddItemModal from "./AddItemModal";
import { itemsApi, userApi } from "../utils/api";
import ProtectedRoute from "./ProtectedRoute";
import { signUp, signIn, checkTokenValidity } from "../utils/auth";
import CurrentUserContext from "../contexts/CurrentUserContext";
import * as auth from "../utils/auth";
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
  const [currentUser, setCurrentUser] = React.useState({});
  const [token, setToken] = React.useState("");
  const history = useHistory();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSignIn = (email, password) => {
    setIsLoading(true);

    auth
      .signIn(email, password)
      .then((data) => {
        if (data.token) {
          return auth.checkTokenValidity(data.token);
        }
      })
      .then((response) => {
        setCurrentUser(response);
        setIsLoggedIn(true);
        history.push("/profile");
      })
      .catch((error) => console.log(error))
      .finally(() => {
        handleCloseModal();
        setIsLoading(false);
      });
  };

  const handleRegister = (avatar, name, email, password) => {
    setIsLoading(true);

    auth
      .signUp(avatar, name, email, password)
      .then((response) => {
        if (response) {
          setCurrentUser(response);
          handleSignIn(email, password);
        } else {
          console.log("User registration failed:", response.error);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        handleCloseModal();
        setIsLoading(false);
      });
  };

  const handleSignout = () => {
    setIsLoggedIn(false);
    setCurrentUser({});
    localStorage.removeItem("jwt");
    history.push("/");
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("image");
  };

  const handleAddClick = () => {
    setActiveModal("add");
  };

  const handleSigninClick = () => {
    setActiveModal("login");
  };

  const handleLogoutClick = () => {
    setActiveModal("logout");
  };

  const handleEditClick = () => {
    setActiveModal("edit");
  };

  const handleRegisterClick = () => {
    setActiveModal("register");
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

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit((currentTempState) => {
      return currentTempState === "C" ? "F" : "C";
    });
  };

  const handleAddItemSubmit = ({ name, imageUrl, weather }) => {
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
        setClothingItems((items) => [response, ...items]);
        handleCloseModal();
      })
      .catch((error) => {
        console.log("Error adding item:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleDelete = (itemId) => {
    setIsLoading(true);

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
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleLikeClick = ({ id, isLiked, user }) => {
    const token = localStorage.getItem("jwt");

    const addLike = () => {
      console.log(`Adding like for item with id=${id}`);
    };

    const removeLike = () => {
      console.log(`Removing like for item with id=${id}`);
    };

    if (isLiked) {
      removeLike();
    } else {
      addLike();
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
        .then((data) => {
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.error("Error checking token validity:", error);
          // Handle error scenario or log out the user
        });
    }
  }, []);

  return (
    <div className="page">
      <HashRouter>
        <CurrentUserContext.Provider value={currentUser}>
          <CurrentTemperatureUnitContext.Provider
            value={{ currentTemperatureUnit, handleToggleSwitchChange }}
          >
            <Header
              onCreateModal={handleAddClick}
              handleClick={handleCardClick}
              isLoggedIn={isLoggedIn}
              handleSignIn={handleSigninClick}
              handleRegister={handleRegisterClick}
            />
            <Route exact path="/">
              <Main
                weatherTemp={temp}
                onSelectCard={handleSelectedCard}
                clothingItems={clothingItems}
              />
            </Route>
            {/* <Route path="/profile"> */}
            <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
              <Profile
                items={clothingItems}
                onSelectCard={handleSelectedCard}
                onAddClick={handleAddClick}
                currentUser={currentUser}
                onClose={handleCloseModal}
              />
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
        </CurrentUserContext.Provider>
      </HashRouter>
    </div>
  );
};

export default App;

//61323 import React, { useEffect, useState } from "react";
// import { HashRouter, Route, useHistory } from "react-router-dom";
// import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
// import { getForecastWeather, parseWeatherData } from "../utils/weatherApi";
// import Header from "../components/Header";
// import Main from "../components/Main";
// import Footer from "../components/Footer";
// import ItemModal from "../components/ItemModal";
// import Profile from "../components/Profile";
// import AddItemModal from "./AddItemModal";
// import { itemsApi, userApi } from "../utils/api";
// import ProtectedRoute from "./ProtectedRoute";
// import { signUp, signIn, checkTokenValidity } from "../utils/auth";
// import CurrentUserContext from "../contexts/CurrentUserContext";
// import * as auth from "../utils/auth";
// import "../blocks/App.css";
// import "../blocks/Card.css";
// import "../blocks/WeatherCard.css";

// const App = () => {
//   const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
//   const [clothingItems, setClothingItems] = useState([]);
//   const [newItem, setNewItem] = useState({});
//   const [prevItems, setPrevItems] = useState([]);
//   const [weatherData, setWeatherData] = useState([]);
//   const [weatherImage, setWeatherImage] = useState("");
//   const [activeModal, setActiveModal] = useState("");
//   const [selectedCard, setSelectedCard] = useState({});
//   const [temp, setTemp] = useState(0);
//   const [isLoggedIn, setIsLoggedIn] = React.useState(false);
//   const [currentUser, setCurrentUser] = React.useState({});
//   const [token, setToken] = React.useState("");
//   const history = useHistory();
//   const [isLoading, setIsLoading] = React.useState(false);

//   const handleSignIn = (email, password) => {
//     auth
//       .signIn(email, password)
//       .then((data) => {
//         if (data.token) {
//           return auth.checkTokenValidity(data.token);
//         }
//       })
//       .then((response) => {
//         setCurrentUser(response);
//         setIsLoggedIn(true);
//         history.push("/profile");
//       })
//       .catch((error) => console.log(error))
//       .finally(() => handleCloseModal());
//   };

//   const handleRegistration = (avatar, name, email, password) => {
//     setIsLoggedIn(true);
//     auth
//       .signUp(avatar, name, email, password)
//       .then((response) => {
//         if (response) {
//           setCurrentUser(response);
//           handleSignIn(email, password);
//         } else {
//           console.log("User registration failed:", response.error);
//         }
//       })
//       .then(() => {
//         handleCloseModal();
//         setIsLoading(false);
//       })
//       .catch((error) => console.log(error));
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setCurrentUser({});
//     localStorage.removeItem("jwt");
//     history.push("/");
//   };

//   const handleCardClick = (card) => {
//     setSelectedCard(card);
//     setActiveModal("image");
//   };

//   const handleAddClick = () => {
//     setActiveModal("add");
//   };

//   const handleLoginClick = () => {
//     setActiveModal("login");
//   };

//   const handleLogoutClick = () => {
//     setActiveModal("logout");
//   };

//   const handleEditClick = () => {
//     setActiveModal("edit");
//   };

//   const handleRegisterClick = () => {
//     setActiveModal("register");
//   };

//   const handleCreateModal = () => {
//     setActiveModal("create");
//   };

//   const handleCloseModal = () => {
//     setActiveModal("");
//     // setClothingItems(prevItems);
//     // setPrevItems([]);
//     // setNewItem({});
//   };

//   const handleSelectedCard = (card) => {
//     setActiveModal("preview");
//     setSelectedCard(card);
//   };

//   const handleToggleSwitchChange = () => {
//     setCurrentTemperatureUnit((currentTempState) => {
//       return currentTempState === "C" ? "F" : "C";
//     });
//   };

//   const handleAddItemSubmit = ({ name, imageUrl, weather }) => {
//     const newItem = {
//       id: Date.now(),
//       name,
//       imageUrl,
//       weather,
//     };

//     itemsApi
//       .add(newItem)
//       .then((response) => {
//         console.log("Item added successfully:", response);
//         setClothingItems((items) => [response, ...items]);
//         handleCloseModal();
//       })
//       .catch((error) => {
//         console.log("Error adding item:", error);
//       });
//   };

//   const handleDelete = (itemId) => {
//     itemsApi
//       .remove(itemId)
//       .then(() => {
//         console.log("Item deleted successfully");
//         setClothingItems((clothingItems) =>
//           clothingItems.filter((item) => item.id !== itemId)
//         );
//         handleCloseModal();
//       })
//       .catch((error) => {
//         console.log("Error deleting item:", error);
//       });
//   };

//   const handleLikeClick = ({ id, isLiked, user }) => {
//     const token = localStorage.getItem("jwt");

//     const addLike = () => {
//       console.log(`Adding like for item with id=${id}`);
//     };

//     const removeLike = () => {
//       console.log(`Removing like for item with id=${id}`);
//     };

//     if (isLiked) {
//       removeLike();
//     } else {
//       addLike();
//     }
//   };

//   useEffect(() => {
//     getForecastWeather()
//       .then((data) => {
//         const temperature = parseWeatherData(data);
//         setTemp(temperature);
//         itemsApi
//           .get()
//           .then((response) => {
//             setClothingItems(response);
//           })
//           .catch((error) => {
//             console.log("Error adding item:", error);
//           });
//       })
//       .catch((error) => {
//         console.log("Error fetching weather data:", error);
//       });

//     const token = localStorage.getItem("jwt");
//     if (token) {
//       checkTokenValidity(token)
//         .then((data) => {
//           setIsLoggedIn(true);
//         })
//         .catch((error) => {
//           console.error("Error checking token validity:", error);
//           // Handle error scenario or log out the user
//         });
//     }
//   }, []);

//   return (
//     <div className="page">
//       <HashRouter>
//         <CurrentUserContext.Provider value={currentUser}>
//           <CurrentTemperatureUnitContext.Provider
//             value={{ currentTemperatureUnit, handleToggleSwitchChange }}
//           >
//             <Header onCreateModal={handleAddClick} onProfileClick={handleCardClick}isLoggedIn={isLoggedIn} />
//             <Route exact path="/">
//               <Main
//                 weatherTemp={temp}
//                 onSelectCard={handleSelectedCard}
//                 clothingItems={clothingItems}
//               />
//             </Route>
//             {/* <Route path="/profile"> */}
//             <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
//               <Profile
//                 items={clothingItems}
//                 onSelectCard={handleSelectedCard}
//               />
//               {/* <Route> */}
//             </ProtectedRoute>
//             <Footer />
//             {activeModal === "create" && (
//               <AddItemModal
//                 buttonText="Add garment"
//                 title="New Garment"
//                 handleCloseModal={handleCloseModal}
//                 isOpen={handleCreateModal}
//                 onAddItem={handleAddItemSubmit}
//               />
//             )}
//             {activeModal === "preview" && (
//               <ItemModal
//                 onDelete={handleDelete}
//                 selectedCard={selectedCard}
//                 onClose={handleCloseModal}
//               />
//             )}
//           </CurrentTemperatureUnitContext.Provider>
//         </CurrentUserContext.Provider>
//       </HashRouter>
//     </div>
//   );
// };

// export default App;
