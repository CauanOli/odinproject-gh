import addButtonFunctionality from "./addButtonFunction";
import showCurrentWeather from "./utils/showCurrentWeather";
import setBackgroundImage from './utils/setBackgroundImage';

export default function handleWeatherData(processedData) {
  setBackgroundImage(processedData.imageUrl);
  showCurrentWeather(processedData.currentWeather);
  addButtonFunctionality(processedData);
}
