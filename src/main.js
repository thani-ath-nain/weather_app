import { weatherApplication } from './modules/weather.js';
const weatherInput = document.querySelector('.city-input');
let weatherApp = weatherApplication();
function callWeatherAPI(e) {
  if (e.key == 'Enter') {
    let city = weatherInput.value;
    weatherApp.makeAPICall(city);
    weatherInput.value = '';
    console.log(city);
  }
}
/**Program Starts Here */
weatherInput.addEventListener('keyup', callWeatherAPI);
