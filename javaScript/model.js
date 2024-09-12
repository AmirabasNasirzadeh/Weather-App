import { async } from "regenerator-runtime";
import { API_URL, getJSON } from "./helpers";

export const state = {
  data: {},
};

const _createWeatherData = function (city) {
  return {
    cityName: city.name,
    cityTime: _createTime(city.dt),
    cityTemp: Math.round(city.main.temp),
    weatherIcon: city.weather[0].icon,
    weatherDescription: city.weather[0].main,
    citySunrise: _createTime(city.sys.sunrise),
    citySunset: _createTime(city.sys.sunset),
    cityWind: `${Math.round(city.wind.speed)}Km`,
    cityHumidity: `${city.main.humidity}%`,
    cod: city.cod,
  };
};

const _createTime = function (unixTime) {
  const time = new Date(unixTime * 1000);
  const hour = time.getHours() < 10 ? `0` + time.getHours() : time.getHours();
  const minute = time.getMinutes() < 10 ? `0` + time.getMinutes() : time.getMinutes();
  return `${hour}:${minute}`;
};

export const setCityData = async function (cityName) {
  try {
    const cityData = await getJSON(API_URL(cityName));
    state.data = _createWeatherData(cityData);
  } catch (error) {
    throw error;
  }
};
