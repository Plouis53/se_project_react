import React from "react";

const weatherOptions = [
  { url: require("../Images/day/sunny.svg").default, day: true, type: "sunny" },
  { url: require("../Images/day/storm.svg").default, day: true, type: "storm" },
  { url: require("../Images/day/snow.svg").default, day: true, type: "snow" },
  { url: require("../Images/day/rain.svg").default, day: true, type: "rain" },
  { url: require("../Images/day/fog.svg").default, day: true, type: "fog" },
  {
    url: require("../Images/day/cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    url: require("../Images/night/sunny.svg").default,
    day: false,
    type: "sunny",
  },
  {
    url: require("../Images/night/storm.svg").default,
    day: false,
    type: "storm",
  },
  {
    url: require("../Images/night/snow.svg").default,
    day: false,
    type: "snow",
  },
  {
    url: require("../Images/night/rain.svg").default,
    day: false,
    type: "rain",
  },
  { url: require("../Images/night/fog.svg").default, day: false, type: "fog" },
  {
    url: require("../Images/night/cloudy.svg").default,
    day: false,
    type: "cloudy",
  },
];

const WeatherCard = ({ day = true, type = "sunny", weatherTemp = 0 }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather_info">{weatherTemp} F</div>
      <img src={imageSrcUrl} className="weather_image" />
    </section>
  );
};

export default WeatherCard;
