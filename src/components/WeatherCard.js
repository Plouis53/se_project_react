import { temperature } from "../utils/weatherApi";
import React, { useContext } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import { weatherOptions } from "../utils/constants";
import "../blocks/WeatherCard.css";
import "../blocks/Card.css";

const WeatherCard = ({ day = true, type = "sunny", weatherTemp = 0 }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const weatherOption = weatherOptions.find(
    (option) => option.day === day && option.type === type
  );
  const imageSrcUrl = weatherOption?.url || "";

  const currentTemp = temperature(weatherTemp);
  const currentTempString = currentTemp[currentTemperatureUnit];

  return (
    <section className="weather">
      <div className="weather__temp-container">{currentTempString}</div>
      <div>
        <img src={imageSrcUrl} className="weather__image" alt={type} />
      </div>
      <section id="weather__info"></section>
    </section>
  );
};

export default WeatherCard;
