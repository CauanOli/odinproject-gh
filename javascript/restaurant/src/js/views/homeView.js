import Restaurant from '../../images/peter-james-eisenhaure-IyucOyBWPh0-unsplash.jpg';
import clearContainer from './viewUtils/clearContainer';
import showView from './viewUtils/showView';
import View from './viewUtils/View';

function showHome(viewContainer) {
  const title = document.createElement('h1');
  title.textContent = 'Restaurant';
  const image = new Image();
  image.src = Restaurant;
  const description = document.createElement('div');
  description.textContent = 'This is a great resturant. Come visit us, or buy online.';
  const homeView = View('home', [title, image, description]);

  clearContainer(viewContainer);
  showView(homeView, viewContainer);
}

export default showHome;
