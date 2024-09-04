export const API_URL = function (city, unit = `metric`) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2256f7cb4b0e36278cf1cf1d45be7d49&units=${unit}`;
};
