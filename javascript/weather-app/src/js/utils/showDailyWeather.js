import createCards from './createCards';

export default function showDailyWeather(dailyWeather) {
  const cardContainer = document.querySelector('.cards.weather');

  if (!cardContainer.classList.contains('daily')) {
    cardContainer.innerHTML = '';
    cardContainer.classList.remove('hourly');
    cardContainer.classList.add('daily');
    createCards(dailyWeather, 'day', cardContainer);
  }
}
