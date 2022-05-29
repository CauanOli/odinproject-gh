import createProjectButton from "./createProjectButton";
import addEventToProjectButton from "./addEventProjectButton";

export default function createProjectButtonsAndAddEvents(userProjects, container) {
  const projectButtonNav = document.querySelector('.nav-list--projects');

  userProjects.forEach((project) => {
      
    const button = createProjectButton(project);
    addEventToProjectButton(button, project, container);
    projectButtonNav.appendChild(button);
    
    });
  
}
