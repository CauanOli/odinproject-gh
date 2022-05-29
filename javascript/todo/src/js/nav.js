// View related functions
import overViewView from "./Views/overview";
import kanbanView from "./Views/kanban";
// Buttons related functions
import createProjectButtonsAndAddEvents from "./Utilities/Buttons/createProjectButtonsAndAddEvents";
import addEventsToButtons from './Utilities/Buttons/addEventsToButtons';
import { addNewButtonsEvent } from "./Utilities/Forms/showForm";
import addNewProjectEvent from "./newProject";
import addNewNoteEvent from "./newNote";
import addDragAndDrop from "./Utilities/addDragAndDrop";

export default function addNavigationFunctionality(container, userProjects) {

  const overViewButton = document.querySelector('.all-button');
  overViewButton.classList.add('active');
  const kanbanButton = document.querySelector('button.kanban');

  createProjectButtonsAndAddEvents(userProjects, container);
  
  addEventsToButtons(
    [kanbanButton, overViewButton],
    [kanbanView, overViewView],
    container, userProjects
  ); 
  
  addNewButtonsEvent();
  addNewProjectEvent(userProjects, container);
  addNewNoteEvent(userProjects, container);
}
