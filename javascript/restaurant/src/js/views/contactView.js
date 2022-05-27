import showView from './viewUtils/showView';
import clearContainer from './viewUtils/clearContainer';
import View from './viewUtils/View';

export default function showContact(viewContainer) {
  const title = document.createElement('h1');
  title.textContent = 'Contact';
  const contactInfo = document.createElement('p');
  contactInfo.textContent = 'Contact us, please';
  const contactView = new View('contact', [title, contactInfo]);

  clearContainer(viewContainer);
  showView(contactView, viewContainer);
}
