import createCards from "./createCards";

export default function showHourlyWeather(hourlyWeather) {
  const cardContainer = document.querySelector('.cards.weather');

  if (!cardContainer.classList.contains('hourly')) {
    cardContainer.innerHTML = '';
    cardContainer.classList.remove('daily');
    cardContainer.classList.add('hourly');
    createCards(hourlyWeather, 'hour', cardContainer);
  }
}