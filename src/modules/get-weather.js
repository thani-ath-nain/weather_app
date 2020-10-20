export default async function getWeather() {
  const response = await fetch(
    'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=da58d9a4cb0201e64d47f56a2e17b5fb',
    { mode: 'cors' }
  );
  const weatherData = await response.json();
  console.log(weatherData.main);
}
