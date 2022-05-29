import View from "../Utilities/View"
export default function projectView(container, project) {
  
  project.board = document.createElement('div');
  project.board.classList.add('board');

  for (let card in project.cards) {
    project.cards[card].card.setAttribute('draggable', 'false');
    project.board.appendChild(project.cards[card].card);
  }
  
  View(container, [project.board]);
}
