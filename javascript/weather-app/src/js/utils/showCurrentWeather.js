export default function showCurrentWeather(currentWeather) {
  const cityName = document.querySelector('#city-name');
  cityName.textContent = currentWeather.city;
  
  const currentIcon = document.querySelector('.icon-current');
  currentIcon.src = currentWeather.icon;

  const description = document.querySelector('.description');
  description.innerText = currentWeather.description;

  const temperature = document.querySelector('.temperature');
  temperature.textContent = currentWeather.temp;
}