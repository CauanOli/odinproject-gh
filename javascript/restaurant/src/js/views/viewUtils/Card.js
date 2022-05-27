export default class Card {
  constructor(name, image) {
    this.name = name;
    this.image = image;
    this.createCard();
    this.createCardTitle();
    this.createCardImage();
  }

  createCard() {
    this.card = document.createElement('div');
    this.card.classList.add('card');
    this.card.addEventListener('click', () => this.toggleCardMode());
  }

  createCardImage() {
    this.cardImage = new Image();
    this.cardImage.src = this.image;
    this.card.appendChild(this.cardImage);
  }

  createCardTitle() {
    this.cardText = document.createElement('p');
    this.cardText.textContent = this.name;
    this.card.appendChild(this.cardText);
  }

  toggleCardMode() {
    if (this.card.classList.contains('show')) {
      this.card.innerHTML = this.name;
      this.card.appendChild(this.cardImage);
      this.card.appendChild(this.cardText);
    } else {
      this.card.innerHTML = '';
      this.card.appendChild(this.cardText);
    }
    this.card.classList.toggle('show');
  }
}
