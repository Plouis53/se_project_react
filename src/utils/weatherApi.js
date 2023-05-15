export const getForecastWeather = (
  latitude,
  longitude,
  apiKey,
  temperature
) => {
  if (temperature >= 86) {
    return Promise.resolve("hot");
  } else if (temperature >= 66 && temperature <= 85) {
    return Promise.resolve("warm");
  } else if (temperature <= 65) {
    return Promise.resolve("cold");
  }

  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(`Error ${res.status}`);
    })
    .then((data) => parseWeatherData(data))
    .catch((error) => {
      console.error(error);
    });
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  return Math.ceil(temperature);
};

export const temperature = (temp) => ({
  F: `${Math.round(temp)}°F`,
  C: `${Math.round(((temp - 32) * 5) / 9)}°C`,
});

export default { getForecastWeather, parseWeatherData, temperature };

// explore default function getForecastWeather (latitude, longitude, apiKey, temperature) {
//   if (temperature >= 86) {
//     return "hot";
//   } else if (temperature >= 66 && temperature <= 85) {
//     return "warm";
//   } else if (temperature <= 65) {
//     return "cold";
//   }

//   return fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
//   ).then((res) => {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(`Error ${res.status}`);
//   });
// }

// export const parseWeatherData = (data) => {
//   const main = data.main;
//   const temperature = main && main.temp;
//   return Math.ceil(temperature);
// };

// export const temperature = (temp) => ({
//   F: `${Math.round(temp)}°F`,
//   C: `${Math.round(((temp - 32) * 5) / 9)}°C`,
// });

// export const getForecastWeather = () => {
//   const latitude = "33.7490";
//   const longitude = "-84.386330";
//   const APIkey = "09023fcd88dfb33405b9fe95d5351e01";
//   const weatherApi = fetch(
//     ` https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
//   )
//     .then((res) => {
//       if (res.ok) {
//         return res.json();
//       } else {
//         return Promise.reject(`Error: ${res.status}`);
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   return weatherApi;
// };

// export const parseWeatherData = (data) => {
//   const main = data.main;
//   const temperature = main && main.temp;
//   return Math.ceil(temperature);
// };

// export const temperature = (temp) => ({
//   F: `${Math.round(temp)}°F`,
//   C: `${Math.round(((temp - 32) * 5) / 9)}°C`,
// });
