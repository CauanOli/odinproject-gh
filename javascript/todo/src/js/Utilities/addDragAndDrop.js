export default function addDragAndDrop(userProjects) {
  let draggables = document.querySelectorAll('.card');
  draggables.forEach((draggable) => {
    draggable.setAttribute('draggable', 'true');

    if (!draggable.classList.contains('drag-event')) {
      draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
      });
      draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
      });
      draggable.classList.add('drag-event');
    }
    });

  userProjects.forEach((project) => {

    if (project.board == undefined) {
      project.board = document.createElement('div');
      project.board.classList.add('board');
    }

    if (!project.board.classList.contains('dragover')) {
      project.board.classList.add('dragover');
      project.board.addEventListener('dragover', (e) => {
        e.preventDefault();
        const draggable = document.querySelector('.dragging');
        let dragAfter = getDragAfterElement(project.board, e.clientY)
        if (dragAfter == null) {
          project.board.appendChild(draggable);
        } else {
          project.board.insertBefore(draggable, dragAfter);
        }
      });
    }
  });

  function getDragAfterElement(board, y) {
    const draggableElements = [...board.querySelectorAll('.card:not(.dragging)')];

    return draggableElements.reduce( (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if(offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
      }, { offset: Number.NEGATIVE_INFINITY }).element;

  }
}
