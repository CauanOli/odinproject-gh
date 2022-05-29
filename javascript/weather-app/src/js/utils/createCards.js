export default function createCards(weatherData, timeMark, cardContainer) {
  for (let time in weatherData) {
    time = weatherData[time];
    const card = document.createElement('div');
    card.classList.add(`${timeMark}-card`);
    card.classList.add('card');
    const date = document.createElement('p');
    date.classList.add('date');
    date.textContent = time[`${timeMark}`];

    const tempIcon = document.createElement('span');
    tempIcon.innerHTML = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M16.5,5C18.05,5 19.5,5.47 20.69,6.28L19.53,9.17C18.73,8.44 17.67,8 16.5,8C14,8 12,10 12,12.5C12,15 14,17 16.5,17C17.53,17 18.47,16.66 19.23,16.08L20.37,18.93C19.24,19.61 17.92,20 16.5,20A7.5,7.5 0 0,1 9,12.5A7.5,7.5 0 0,1 16.5,5M6,3A3,3 0 0,1 9,6A3,3 0 0,1 6,9A3,3 0 0,1 3,6A3,3 0 0,1 6,3M6,5A1,1 0 0,0 5,6A1,1 0 0,0 6,7A1,1 0 0,0 7,6A1,1 0 0,0 6,5Z"></path>
        </svg>`;
    const maxTemp = document.createElement('p');
    maxTemp.classList.add('max-temp');
    maxTemp.innerText = time.maxTemp;
    maxTemp.appendChild(tempIcon);

    

    const image = new Image();
    image.src = time.icon;

    const description = document.createElement('p');
    description.classList.add('description');
    description.innerText = time.description;

    [date, image, description, maxTemp].forEach((item) => card.appendChild(item));
    if (time.minTemp != undefined) {
      const minTemp = document.createElement('p');
      minTemp.classList.add('min-temp');
      minTemp.innerText = time.minTemp;
      card.appendChild(minTemp)
    }
    cardContainer.appendChild(card)
  }
}
