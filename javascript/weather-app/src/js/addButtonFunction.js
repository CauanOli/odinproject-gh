import showDailyWeather from "./utils/showDailyWeather";
import showHourlyWeather from './utils/showHourlyWeather';

export default function addButtonFunctionality(processedData) {
  const hourlyButton = document.querySelector('button.hourly-weather');
  const dailyButton = document.querySelector('button.daily-weather');

  const cardContainer = document.querySelector('.cards.weather');
  cardContainer.classList.remove('daily');
  showDailyWeather(processedData.dailyWeather);

  function activateHourlyWeather() {
    if (!hourlyButton.classList.contains('active')) {
      hourlyButton.classList.add('active');
      dailyButton.classList.remove('active');
      showHourlyWeather(processedData.hourlyWeather)
    }
  }

  function activateDailyWeather() {
    if (!dailyButton.classList.contains('active')) {
      dailyButton.classList.add('active');
      hourlyButton.classList.remove('active');
      showDailyWeather(processedData.dailyWeather);
    }
  }

  hourlyButton.onclick = () => activateHourlyWeather();
  dailyButton.onclick = () => activateDailyWeather();

}
