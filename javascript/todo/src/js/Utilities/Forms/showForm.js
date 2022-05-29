const newNoteForm = document.querySelector('.new-note');
const newProjectForm = document.querySelector('.new-project');
const newNoteButton = document.querySelector('#new-card-button');
const newProjectButton = document.querySelector('#new-project-button');
const overlay = document.querySelector('.overlay')

const showNewNoteForm = () => {
  newNoteForm.classList.remove('hidden');
  newNoteButton.classList.add('active');
}

const showNewProjectForm= () => {
  newProjectForm.classList.remove('hidden');
  newProjectButton.classList.add('active');
}

const hideNewNoteForm = () => {
  newNoteForm.classList.add('hidden');
  newNoteButton.classList.remove('active');
}

const hideNewProjectForm = () => {
  newProjectForm.classList.add('hidden');
  newProjectButton.classList.remove('active');
}

const showOverlay = () => {
  overlay.classList.remove('hidden');
}

const hideOverlay = () => {
  overlay.classList.add('hidden');
}

const hideEverything = () => {
  hideOverlay();
  hideNewNoteForm();
  hideNewProjectForm();
}


const addNewButtonsEvent = () => {

  newNoteButton.addEventListener('click', () => {
    hideNewProjectForm();
    showOverlay();
    showNewNoteForm();
  });

  newProjectButton.addEventListener('click', () => {
    hideNewNoteForm();
    showOverlay();
    showNewProjectForm();
  });

  overlay.addEventListener('click', () => {
    hideEverything();
  });
}

export { addNewButtonsEvent , hideEverything };
