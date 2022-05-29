import View from "../Utilities/View";
export default function overViewView(container, userProjects) { 
  container.classList = 'overview';
  // Takes all cards from all the user projects
  const cards = [];
  userProjects.forEach((project) => {
    for (let card in project.cards) {
      project.cards[card].card.setAttribute('draggable', 'false');
      cards.push(project.cards[card].card);
    }
    View(container, cards);
  });
}
