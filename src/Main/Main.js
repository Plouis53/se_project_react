import { defaultClothingItems } from "../utils/Constants";
import WeatherCard from "../WeatherCard/WeatherCrad";
import Card from "../Card/Card";
import React, { useMemo } from "react";
import "../Main/Main.css";

function Main({ weatherTemp, onSelectCard }) {
  const weatherType = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <div className="main__container">
        <section className="weather">
          <div className="weather__container">
            <WeatherCard day={false} type="cloudy" weatherTemp={weatherTemp} />
            <section className="main__clothing">
              <p className="main__text">
                Today is {weatherTemp}°F / You may want to wear:
              </p>
              <ul className="main__cards">
                {filteredCards.map((item) => (
                  <Card item={item} onSelectCard={onSelectCard} />
                ))}
              </ul>
            </section>
          </div>
        </section>
        <button className="main__button"></button>
      </div>
    </main>
  );
}
export default Main;
