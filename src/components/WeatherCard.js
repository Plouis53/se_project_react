import { temperature } from "../utils/weatherApi";
import React, { useContext } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import {defaultClothingItems, weatherOptions} from "../utils/Constants"
import "../blocks/WeatherCard.css";
import "../blocks/Card.css";

// const weatherOptions = [
//   { url: require("../images/day/sunny.svg").default, day: true, type: "sunny" },
//   { url: require("../images/day/storm.svg").default, day: true, type: "storm" },
//   { url: require("../images/day/snow.svg").default, day: true, type: "snow" },
//   { url: require("../images/day/rain.svg").default, day: true, type: "rain" },
//   { url: require("../images/day/fog.svg").default, day: true, type: "fog" },
//   {
//     url: require("../images/day/cloudy.svg").default,
//     day: true,
//     type: "cloudy",
//   },
//   {
//     url: require("../images/night/sunny.svg").default,
//     day: false,
//     type: "sunny",
//   },
//   {
//     url: require("../images/night/storm.svg").default,
//     day: false,
//     type: "storm",
//   },
//   {
//     url: require("../images/night/snow.svg").default,
//     day: false,
//     type: "snow",
//   },
//   {
//     url: require("../images/night/rain.svg").default,
//     day: false,
//     type: "rain",
//   },
//   { url: require("../images/night/fog.svg").default, day: false, type: "fog" },
//   {
//     url: require("../images/night/cloudy.svg").default,
//     day: false,
//     type: "cloudy",
//   },
// ];

const WeatherCard = ({ day = true, type = "sunny", weatherTemp = 0 }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });
  const currentTemp = temperature(weatherTemp);
  const currentTempString = currentTemp[currentTemperatureUnit];

  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section className="weather">
      <div className="weather__temp-container">{currentTempString}</div>
      <div>
        <img src={imageSrcUrl} className="weather__image" />
      </div>
      <section id="weather__info"></section>
    </section>
  );
};

export default WeatherCard;
