import React, { useContext } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import WeatherCard from "../components/WeatherCard";
import ItemCard from "./ItemCard";
import { temperature } from "../utils/weatherApi";
import "../blocks/Main.css";
import "../blocks/Card.css";
import itemsApi from "../utils/api";

function Main({
  // onLike,
  // onUnlike,
  weatherTemp,
  onSelectCard,
  clothingItems,
  isLoggedIn,
  setClothingItems,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const getWeatherType = () => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  };

  const weatherType = getWeatherType();

  const currentTemp = temperature(weatherTemp);
  const currentTempString = currentTemp[currentTemperatureUnit];

  // const handleLike = (itemId) => {
  //   // onCardLike(itemId);
  //   itemsApi
  //     .like(itemId)
  //     .then((response) => {
  //       //set clothing items by
  //       const newitems = clothingItems.map(
  //         (clothingItem) => clothingItem._id != itemId
  //       );
  //       setClothingItems([...newitems, response.data]);
  //       console.log(clothingItems);
  //       console.log("Item liked successfully:", response);
  //     })
  //     .catch((error) => {
  //       console.log("Error liking item:", error);
  //     });
  // };

  const handleLike = (itemId) => {
    itemsApi
      .like(itemId)
      .then((response) => {
        setClothingItems((prevItems) =>
          prevItems.map((clothingItem) =>
            clothingItem._id === itemId
              ? { ...clothingItem, likes: true }
              : clothingItem
          )
        );
        console.log("Item liked successfully:", response);
      })
      .catch((error) => {
        console.log("Error liking item:", error);
      });
  };

  // const handleUnlike = (itemId) => {
  //   itemsApi
  //     .unlike(itemId)
  //     .then((response) => {
  //       console.log("Item unliked successfully:", response);
  //     })
  //     .catch((error) => {
  //       console.log("Error unliking item:", error);
  //     });
  // };

  const handleUnlike = (itemId) => {
    itemsApi
      .unlike(itemId)
      .then((response) => {
        setClothingItems((prevItems) =>
          prevItems.map((clothingItem) =>
            clothingItem._id === itemId
              ? { ...clothingItem, likes: false }
              : clothingItem
          )
        );
        console.log("Item unliked successfully:", response);
      })
      .catch((error) => {
        console.log("Error unliking item:", error);
      });
  };

  return (
    <main className="main">
      <div className="main__container">
        <WeatherCard day={true} type="sunny" weatherTemp={weatherTemp} />
        <section className="main__clothing">
          <p className="main__text">
            Today is {currentTempString} / You may want to wear:
          </p>
          <ul className="main__cards">
            {Array.isArray(clothingItems) &&
              clothingItems.map((item) => (
                <ItemCard
                  key={item._id}
                  item={item}
                  onSelectCard={onSelectCard}
                  onLike={handleLike}
                  onUnlike={handleUnlike}
                  isLoggedIn={isLoggedIn}
                />
              ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Main;

// 72423import WeatherCard from "../components/WeatherCard";
// import React, { useContext } from "react";
// import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
// import ItemCard from "./ItemCard";
// import { temperature } from "../utils/weatherApi";
// import "../blocks/Main.css";
// import "../blocks/Card.css";

// function Main({
//   onCardLike,
//   onCardUnlike,
//   weatherTemp,
//   onSelectCard,
//   clothingItems,
//   isLoggedIn,
// }) {
//   const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

//   const getWeatherType = () => {
//     if (weatherTemp >= 86) {
//       return "hot";
//     } else if (weatherTemp >= 66 && weatherTemp <= 85) {
//       return "warm";
//     } else if (weatherTemp <= 65) {
//       return "cold";
//     }
//   };

//   const weatherType = getWeatherType();

//   const currentTemp = temperature(weatherTemp);
//   const currentTempString = currentTemp[currentTemperatureUnit];

//   return (
//     <main className="main">
//       <div className="main__container">
//         <WeatherCard day={true} type="sunny" weatherTemp={weatherTemp} />
//         <section className="main__clothing">
//           <p className="main__text">
//             Today is {currentTempString} / You may want to wear:
//           </p>
//           <ul className="main__cards">
//             {Array.isArray(clothingItems) &&
//               clothingItems.map((item) => (
//                 <ItemCard
//                   key={item._id}
//                   item={item}
//                   onSelectCard={onSelectCard}
//                   onLike={onCardLike}
//                   onUnlike={onCardUnlike}
//                   isLoggedIn={isLoggedIn}
//                 />
//               ))}
//           </ul>
//         </section>
//       </div>
//     </main>
//   );
// }

// export default Main;

// import WeatherCard from "../components/WeatherCard";
// import React, { useContext } from "react";
// import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
// import ItemCard from "./ItemCard";
// import { temperature } from "../utils/weatherApi";
// import "../blocks/Main.css";
// import "../blocks/Card.css";

// function Main({
//   onCardLike,
//   onCardUnlike,
//   weatherTemp,
//   onSelectCard,
//   clothingItems,
//   isLoggedIn,
// }) {
//   const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

//   const getWeatherType = () => {
//     if (weatherTemp >= 86) {
//       return "hot";
//     } else if (weatherTemp >= 66 && weatherTemp <= 85) {
//       return "warm";
//     } else if (weatherTemp <= 65) {
//       return "cold";
//     }
//   };

//   const weatherType = getWeatherType();

//   const currentTemp = temperature(weatherTemp);
//   const currentTempString = currentTemp[currentTemperatureUnit];

//   //   return (
//   //     <main className="main">
//   //       <div className="main__container">
//   //         <WeatherCard day={true} type="sunny" weatherTemp={weatherTemp} />
//   //         <section className="main__clothing">
//   //           <p className="main__text">
//   //             Today is {currentTempString} / You may want to wear:
//   //           </p>
//   //           <ul className="main__cards">
//   //             {Array.isArray(clothingItems) &&
//   //               clothingItems.map((item) => (
//   //                 <ItemCard
//   //                   key={item._id}
//   //                   item={item}
//   //                   onSelectCard={onSelectCard}
//   //                   onLike={onCardLike}
//   //                   onUnlike={onCardUnlike}
//   //                   isLoggedIn={isLoggedIn}
//   //                 />
//   //               ))}
//   //           </ul>
//   //         </section>
//   //       </div>
//   //     </main>
//   //   );
//   // }
//   // export default Main;

//   return (
//     <main className="main">
//       <div className="main__container">
//         <WeatherCard day={true} type="sunny" weatherTemp={weatherTemp} />
//         <section className="main__clothing">
//           <p className="main__text">
//             Today is {currentTempString} / You may want to wear:
//           </p>
//           <ul className="main__cards">
//             {clothingItems.map((item) => (
//               <ItemCard
//                 key={item._id}
//                 item={item}
//                 onSelectCard={onSelectCard}
//                 onLike={onCardLike}
//                 onUnlike={onCardUnlike}
//                 isLoggedIn={isLoggedIn}
//               />
//             ))}
//           </ul>
//         </section>
//       </div>
//     </main>
//   );
// }

// export default Main;
