import projectView from "../../Views/project";
import removeActiveFromOtherButtons from "./removeActiveFromOtherButton";

export default function addEventToProjectButton(button, project, container) {
  button.addEventListener('click', () => {
    container.classList = 'project';
    button.classList.add('active');
    projectView(container, project);
    removeActiveFromOtherButtons(button);
  });
}
