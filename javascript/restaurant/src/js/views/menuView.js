import foodOne from '../../images/foodOne.jpg';
import foodTwo from '../../images/foodTwo.jpg';
import foodThree from '../../images/foodThree.jpg';
import foodFour from '../../images/foodFour.jpg';
import clearContainer from './viewUtils/clearContainer';
import showView from './viewUtils/showView';
import View from './viewUtils/View';
import Card from './viewUtils/Card';

export default function showMenu(viewContainer) {
  const title = document.createElement('h1');
  title.textContent = 'Menu';
  const cardsContainer = document.createElement('div');
  cardsContainer.classList = 'cards';

  const cardOne = new Card('foodOne', foodOne);
  const cardTwo = new Card('foodOne', foodTwo);
  const cardThree = new Card('foodOne', foodThree);
  const cardFour = new Card('foodOne', foodFour);

  const cards = [cardOne.card, cardTwo.card, cardThree.card, cardFour.card];
  cards.forEach((card) => cardsContainer.append(card));

  const menuView = new View('menu', [title, cardsContainer]);
  clearContainer(viewContainer);
  showView(menuView, viewContainer);
}
