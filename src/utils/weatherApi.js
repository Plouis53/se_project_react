export const getForecastWeather = () => {
  const latitude = "33.7490";
  const longitude = "-84.386330";
  const APIkey = "09023fcd88dfb33405b9fe95d5351e01";
  const weatherApi = fetch(
    ` https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return weatherApi;
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