export default function addSearchFunctionality(getData, processData) {
  const searchBar = document.querySelector('.search-bar');
  const searchButton = document.querySelector('.search-button');
  const loadingBar = document.querySelector('.loading');
  const currentWeather = document.querySelector('.current-weather');

  searchBar.addEventListener('keypress', (e) => {
    if (e.code == 'Enter') {
      const data = getData(searchBar.value);
      loadingBar.classList.add('active');
      data.then((result) => {
        processData(result, searchBar.value);
        loadingBar.classList.remove('active');
        currentWeather.classList.add('visible');
      });
    }
  });

  searchButton.addEventListener('click', () => {
    const data = getData(searchBar.value);
    loadingBar.classList.add('active');
    data.then((result) => {
      processData(result, searchBar.value);
      loadingBar.classList.remove('active');
      currentWeather.classList.add('visible');
    });
  });
}
