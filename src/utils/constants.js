export const latitude = "33.7490";
export const longitude = "-84.386330";
export const APIkey = "09023fcd88dfb33405b9fe95d5351e01";

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}

// export const baseUrl = "http://localhost:3001";
// export const baseUrl =
//   process.env.NODE_ENV === "production"
//     ? "https://api.styleguide.umhl.com"
//     : "http://localhost:3001";

export const defaultClothingItems = [
  {
    id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const weatherOptions = [
  { url: require("../images/day/sunny.svg").default, day: true, type: "sunny" },
  { url: require("../images/day/storm.svg").default, day: true, type: "storm" },
  { url: require("../images/day/snow.svg").default, day: true, type: "snow" },
  { url: require("../images/day/rain.svg").default, day: true, type: "rain" },
  { url: require("../images/day/fog.svg").default, day: true, type: "fog" },
  {
    url: require("../images/day/cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    url: require("../images/night/sunny.svg").default,
    day: false,
    type: "sunny",
  },
  {
    url: require("../images/night/storm.svg").default,
    day: false,
    type: "storm",
  },
  {
    url: require("../images/night/snow.svg").default,
    day: false,
    type: "snow",
  },
  {
    url: require("../images/night/rain.svg").default,
    day: false,
    type: "rain",
  },
  { url: require("../images/night/fog.svg").default, day: false, type: "fog" },
  {
    url: require("../images/night/cloudy.svg").default,
    day: false,
    type: "cloudy",
  },
];

// export const baseUrl = "https://my-json-server.typicode.com/Plouis53/se_project_react";

// import dayCloudy from "../images/day/cloudy.svg";
// import dayFog from "../images/day/fog.svg";
// import dayRain from "../images/day/rain.svg";
// import daySnow from "../images/day/snow.svg";
// import dayStorm from "../images/day/storm.svg";
// import daySunny from "../images/day/sunny.svg";

// import nightCloudy from "../images/night/cloudy.svg";
// import nightFog from "../images/night/fog.svg";
// import nightRain from "../images/night/rain.svg";
// import nightSnow from "../images/night/snow.svg";
// import nightStorm from "../images/night/storm.svg";
// import nightSunny from "../images/night/sunny.svg";

// export const latitude = "33.7490";
// export const longitude = "-84.386330";
// export const APIkey = "09023fcd88dfb33405b9fe95d5351e01";

// export const dayBanners = {
//   cloudy: dayCloudy,
//   fog: dayFog,
//   rain: dayRain,
//   snow: daySnow,
//   storm: dayStorm,
//   sunny: daySunny,
// };

// export const nightBanners = {
//   cloudy: nightCloudy,
//   fog: nightFog,
//   rain: nightRain,
//   snow: nightSnow,
//   storm: nightStorm,
//   sunny: nightSunny,
// };

// export const baseUrl = "http://localhost:3000";
