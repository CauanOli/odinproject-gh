import Button from './Button';
import Menu from './Menu';
import homeView from './views/homeView';
import menuView from './views/menuView';
import contactView from './views/contactView';

export default function createMenu(viewContainer) {
  const homeButton = new Button('Home', () => homeView(viewContainer));
  const menuButton = new Button('Menu', () => menuView(viewContainer));
  const contactButton = new Button('Contact', () => contactView(viewContainer));

  homeButton.button.classList.add('active');
  const buttons = [homeButton, menuButton, contactButton];
  const menu = new Menu(buttons).nav;

  return { menu };
}
