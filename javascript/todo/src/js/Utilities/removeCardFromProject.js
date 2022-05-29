import { userProjects } from "../..";
import { main } from "../..";
import showCurrentView from "./showCurrentView";
import updateLocalStorage from "./updateLocalStorage";

export default function removeCardFromProjectAndShowCurrentView(cardProject, cardId) {
  userProjects.forEach((project) => {
    if (project.name == cardProject) {
      project.removeCard(cardId);
      showCurrentView(main, userProjects, project);
      updateLocalStorage(userProjects)
    };
  });
}
