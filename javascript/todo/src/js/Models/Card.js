import { format } from "date-fns";
import removeCardFromProjectAndShowCurrentView from '../Utilities/removeCardFromProject';

export default function Card(title, description, date, tag, owner, cardId) {

  const cardInfo = [title, description, date, tag, owner, cardId];
  const card = document.createElement('div');
  card.classList.add('card');
  card.classList.add(cardId);

  //Card Owner Container
  const cardOwnerContainer = document.createElement('div');
  cardOwnerContainer.classList.add('card--owner');

  const cardTitle = document.createElement('p');
  cardTitle.id = 'card--title';
  cardTitle.innerText = title;

  const ownerImage = new Image();
  ownerImage.classList.add('owner');
  ownerImage.src = `${owner}`;

  const completeButton = document.createElement('button');
  completeButton.classList.add('card--complete');
  completeButton.innerHTML = `<svg style="width:32px; height:32px" viewBox="0 0 24 24">
  <path fill="currentColor" d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
</svg>`;
  
  completeButton.addEventListener('click', function completeCard() {
    let cardProject = cardId;
    cardProject = cardProject.slice(0, -1);
    removeCardFromProjectAndShowCurrentView(cardProject, cardId);
  });

  cardOwnerContainer.appendChild(cardTitle);
  cardOwnerContainer.appendChild(ownerImage);
  cardOwnerContainer.appendChild(completeButton);
  
  // Card Description
  const cardDescription = document.createElement('p');
  cardDescription.id = 'card--description';
  cardDescription.innerText = description;

  // Card Tags
  const cardDate = document.createElement('p');
  cardDate.id = 'card--date';
  cardDate.textContent = format(new Date(date), 'yyyy/MM/dd');

  const cardPriority = document.createElement('p');
  cardPriority.classList.add('card--priority', tag);
  cardPriority.innerText = '';

  const cardTags = document.createElement('div');
  cardTags.id = 'card--tags';
  cardTags.appendChild(cardDate);
  cardTags.appendChild(cardPriority);

  card.appendChild(cardOwnerContainer);
  card.appendChild(cardDescription);
  card.appendChild(cardTags);

  return { card, cardInfo};
  
}