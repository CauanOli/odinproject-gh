import { createApi } from "unsplash-js";

export default async function getWeatherData(cityName) {
  cityName = cityName.toLowerCase();
  const apiKey = '16e82fb69c4915ea9471df52f7052a7b';
  const unsplash = createApi({
    accessKey: 'Fuhkjb8L2SnN_8UevtaVX1OSipDbZQJqdw_okREb5Cc',
    fetch: fetch,
  });

  // Get city latitude and longitude from name
  let cityData = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`, { mode: 'cors' });
  cityData = await cityData.json();
  const latitude = cityData[0].lat;
  const longitude = cityData[0].lon;

  // Fetch weather data
  let data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`, { mode: 'cors' });
  data = await data.json();

  // Search corresponding image with Unsplash API
  const ImageUrl = await unsplash.search.getPhotos({ query: cityName, page: 1, perPage: 1, orientation: 'landscape', collectionIds: ['city']}).then((result) => {
    return result.response.results[0].links.download;
  });

  return [data, ImageUrl];

}
