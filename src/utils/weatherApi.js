const latitude = "33.7490";
const longitude = "-84.386330";
const APIkey = "09023fcd88dfb33405b9fe95d5351e01";

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`'Error${res.status}`);
    }
  });

  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  return Math.ceil(temperature);
};

// 5823 const latitude = "33.7490";
// const longitude = "-84.386330";
// const APIkey = "09023fcd88dfb33405b9fe95d5351e01";

// export const getForecastWeather = () => {
//   return fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
//   )
//     .then((res) => {
//       if (res.ok) {
//         return res.json();
//       }
//       return Promise.reject(`Error: ${res.status}`);
//     });
// };

// export const weather = (data) => {
//   const main = data.main;
//   const temperature = main && main.temp;

//   const weather = {};
//   weather.temp = {};
//   weather.temp.F = `${Math.round(data.main.temp)}°F`;
//   weather.temp.C = `${Math.round(((data.main.temp - 32) * 5) / 9)}°C`;

//   return weather;
// };

// import {} from "./Constants";

// const gitWeather = (APIkey) => {
//   const latitude = "33.7490";
//   const longitude = "-84.386330";
//   return fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
//   ).then((res) => {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(`Error: ${res.status}`);
//   });
// };

// const weather = (data) => {
//   const main = data.main;
//   const temp = main && main.temp;
//   weather.temp.F = `${Math.round(data.main.temp)}°F`;
//   weather.temp.C = `${Math.round(((data.main.temp - 32) * 5) / 9)}°C`;
//   return weather;
// };

// export default weather, getForecastWeather;

// const latitude = "33.7490";
// const longitude = "-84.386330";
// const APIkey = "09023fcd88dfb33405b9fe95d5351e01";
// export const weather, getForecastWeather = () => {
//   const weatherApi = fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
//   ).then((res) => {
//     if (res.ok) {
//       return res.json();
//     } else {
//       return Promise.reject(`'Error${res.status}`);
//     }
//   });
//   return weatherApi;
// };

// export const weather = (data) => {
//   const main = data.main;
//   const temperature = main && main.temp;
//   return Math.ceil(temperature);
// };
