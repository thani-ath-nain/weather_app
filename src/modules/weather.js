export function weatherApplication(cityName) {
  function displayWeather(returenedObject) {
    displayCompleteTemperature(returenedObject.main);
    displayCity(returenedObject);
    console.log(returenedObject);
  }
  function displayCompleteTemperature(temperatureArray) {
    const valueField = document.querySelector('.weather-value');
    const temperature = document.querySelectorAll('.temp');
    const values = Object.values(temperatureArray);
    for (let i = 0; i < temperature.length; i++) {
      let tempString = temperature[i].textContent;
      tempString += values[i];
      temperature[i].textContent = tempString;
    }
    valueField.textContent = temperatureArray.temp;
  }
  function displayCity(returnedObject) {
    const nameOfCIty = document.querySelector('.city-name');
    let cityNameString = returnedObject.name + ',';
    cityNameString += returnedObject.sys.country;
    nameOfCIty.textContent = cityNameString;
  }
  let makeAPICall = async function (cityName) {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=da58d9a4cb0201e64d47f56a2e17b5fb&units=metric`,
        { mode: 'cors' }
      );
      const weatherData = await response.json();
      displayWeather(weatherData);
    } catch (e) {
      return -1;
    }
  };
  return { makeAPICall };
}
