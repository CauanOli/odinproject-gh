import Project from "../Models/Project";

export default function readLocalStorage() {
  let userProjects = [];
  if (localStorage['todoUserProjects']) {
    let localUserStorage = JSON.parse(localStorage['todoUserProjects']);
    localUserStorage.forEach((project) => {
      let readedProject = Project(project.name);
      for (let card in project.cards) {
        readedProject.addCard(...project.cards[card].cardInfo);
      }
      userProjects.push(readedProject);
    });
  }
  return userProjects;
}
