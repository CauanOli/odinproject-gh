import { hideEverything } from "./Utilities/Forms/showForm";
import showCurrentView from "./Utilities/showCurrentView";
import updateLocalStorage from "./Utilities/updateLocalStorage";
import { userImage } from "..";

export default function addNewNoteEvent(userProjects, container) {
  const noteForm = document.querySelector('#new-note-form');
  
  noteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let cardTitle = noteForm[0].value;
    let cardDescription = noteForm[1].value;
    let cardDate = noteForm[2].value;
    let cardProject = noteForm[3].value;
    [cardProject] = userProjects.filter((element) => {
      return element.name == cardProject;
    });
    let cardPriority = noteForm.priority.value;
    cardProject.addCard(cardTitle, cardDescription, cardDate, cardPriority, userImage);

    // Show current view
    const currentProject = document.querySelector('button.active').innerText;
    if (cardProject.name == currentProject) {
      showCurrentView(container, userProjects, cardProject);
    } else {
      showCurrentView(container, userProjects);
    }
    updateLocalStorage(userProjects);
    hideEverything();
  });
}
