export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const API_URL = function (city, unit = `metric`) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2256f7cb4b0e36278cf1cf1d45be7d49&units=${unit}`;
};

export const getJSON = async function (url) {
  try {
    const fetchPro = fetch(url);
    const response = await Promise.race([fetchPro, timeout(10)]);
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};
