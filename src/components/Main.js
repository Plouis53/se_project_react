import { defaultClothingItems } from "../utils/Constants";
import WeatherCard from "../components/WeatherCard";
import Card from "../components/Card";
import React, { useMemo } from "react";
import "../blocks/Main.css";
import CurrentTempUnitContext from "../contexts/CurrentTempUnitContext";

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
        <WeatherCard day={true} type="sunny" weatherTemp={weatherTemp} />
        <section className="main__clothing">
          <p className="main__text">
            Today is {weatherTemp}°F / You may want to wear:
          </p>
          <ul className="main__cards">
            {filteredCards.map((item) => (
              <Card
                key={item._id}
                item={item}
                onSelectCard={onSelectCard}
                name={item.name}
                weather={item.weather}
                id={item.id}
                link={item.link} _id={undefined}              />
            ))}
          </ul>
        </section>
        <button className="main__button"></button>
      </div>
    </main>
  );
}
export default Main;
