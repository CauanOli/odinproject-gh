import Project from './Models/Project';
import createProjectButtonsAndAddEvents from './Utilities/Buttons/createProjectButtonsAndAddEvents';
import { hideEverything } from './Utilities/Forms/showForm';
import addProjectsToForm from './Utilities/Forms/addProjecttoForms';
import showCurrentView from './Utilities/showCurrentView';
import updateLocalStorage from './Utilities/updateLocalStorage';

export default function addNewProjectEvent(userProjects, container) {
  const projectForm = document.querySelector('#new-project-form');
  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const projectTitle = projectForm[0].value;
    const validTitle = userProjectsDontContain(userProjects, projectTitle);

    if (projectTitle.length > 1 && validTitle) {
      const newProject = Project(projectTitle);
      userProjects.push(newProject)
      createProjectButtonsAndAddEvents([newProject], container);
      addProjectsToForm([newProject]);
      showCurrentView(container, userProjects);
      hideEverything();
      updateLocalStorage(userProjects);
    }
  });
}


const userProjectsDontContain = (userProjects, projectTitle) => {
  let dontContain = true;
  userProjects.forEach((project) => {
    if (project.name == projectTitle) { dontContain = false };
  });
  return dontContain;
}