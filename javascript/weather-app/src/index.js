import getWeatherData from './js/getWeatherData';
import addSearchFunctionality from './js/addSearchFunctionality.js';
import handleWeatherData from './js/handleData';

const processData = (data, cityName) => {
  const weatherData = data[0];
  const imageUrl = data[1];

  const currentWeather = {
    city: cityName,
    temp: weatherData.current.temp,
    description: weatherData.current.weather[0].description,
    icon: `http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`
  }

  let dailyWeather = {};
  weatherData.daily.forEach((day) => {
    let dayData = {
      day: new Date(day.dt * 1000).toLocaleDateString(),
      description: day.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
      maxTemp: day.temp.max,
      minTemp: day.temp.min,
    }
    dailyWeather[dayData.day] = dayData;
  });

  let hourlyWeather = {};
  weatherData.hourly.forEach((hour) => {
    let date = new Date(hour.dt * 1000);
    let hourData = {
      hour: `${date.getDate()}/${date.getMonth()} ${date.getHours()}:00`,
      description: hour.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`,
      maxTemp: hour.temp,
    }
    hourlyWeather[hourData.hour] = hourData;
  })

  handleWeatherData({ imageUrl, currentWeather, dailyWeather, hourlyWeather});
}


addSearchFunctionality(getWeatherData, processData);
