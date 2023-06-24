import WeatherCard from "../components/WeatherCard";
import React, { useContext } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import ItemCard from "./ItemCard";
import { temperature } from "../utils/weatherApi";
import "../blocks/Main.css";
import "../blocks/Card.css";

function Main({
  cards,
  onCardLike,
  // isLiked,
  weatherTemp,
  onSelectCard,
  clothingItems,
  isLoggedIn,
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

  // const filteredCards = clothingItems.filter((item) => {
  //   return item.weather.toLowerCase() === weatherType;
  // });

  return (
    <main className="main">
      <div className="main__container">
        <WeatherCard day={true} type="sunny" weatherTemp={weatherTemp} />
        <section className="main__clothing">
          <p className="main__text">
            Today is {currentTempString} / You may want to wear:
          </p>
          <ul className="main__cards">
            {clothingItems.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                onSelectCard={onSelectCard}
                onLike={onCardLike}
                isLoggedIn={isLoggedIn}
              />
            ))}
          </ul>
          {/* <ul className="main__cards">
            {cards
              .filter((card) => card.weather === weatherType)
              .map((clothingItems) => (
                <ItemCard
                  key={clothingItems._id}
                  item={clothingItems}
                  onSelectCard={onSelectCard}
                  onLike={onCardLike}
                  isLoggedIn={isLoggedIn}
                />
              ))}
          </ul> */}
        </section>
        {/* <button className="main__button"></button> */}
      </div>
    </main>
  );
}
export default Main;
