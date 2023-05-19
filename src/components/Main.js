import WeatherCard from "../components/WeatherCard";
import React, { useMemo, useContext } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import ItemCard from "./ItemCard";
import { temperature } from "../utils/weatherApi";
import "../blocks/Main.css";

function Main({ weatherTemp, onSelectCard, clothingItems }) {
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

  const filteredCards = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });
  // console.log("ItemCard");

  return (
    <main className="main">
      <div className="main__container">
        <WeatherCard day={true} type="sunny" weatherTemp={weatherTemp} />
        <section className="main__clothing">
          <p className="main__text">
            Today is {currentTempString} / You may want to wear:
          </p>
          <ul className="main__cards">
            {filteredCards.map((item) => (
              <ItemCard
                key={item._id}
                item={item}
                onSelectCard={onSelectCard}
              />
            ))}
          </ul>
        </section>
        <button className="main__button"></button>
      </div>
    </main>
  );
}
export default Main;
