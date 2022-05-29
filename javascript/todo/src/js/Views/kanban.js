import addDragAndDrop from "../Utilities/addDragAndDrop";
import View from "../Utilities/View";

export default function kanbanView(container, userProjects) {
  container.classList = 'kanban';
  container.innerHTML = '';
  let userBoards = [];
  userProjects.forEach((project) => {

    if (project.board == undefined) {
      project.board = document.createElement('div');
      project.board.classList.add('board');
    }

    project.board.innerHTML = '';
    const title = document.createElement('h3');
    title.innerText = project.name;
    project.board.appendChild(title);
    for (let card in project.cards) {
      project.board.appendChild(project.cards[card].card);
    }
    userBoards.push(project.board);
  });
  View(container, userBoards);
  addDragAndDrop(userProjects);
}
