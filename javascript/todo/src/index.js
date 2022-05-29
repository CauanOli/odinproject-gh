import addNavigationFunctionality from "./js/nav";
import overViewView from "./js/Views/overview";
import addProjectsToForm from "./js/Utilities/Forms/addProjecttoForms";
import readLocalStorage from "./js/Utilities/readLocalStorage";

export const userImage = 'https://avatars.githubusercontent.com/u/73416110?v=4';
export const main = document.querySelector('main');
export let userProjects = [];
userProjects = readLocalStorage();

addProjectsToForm(userProjects);
overViewView(main, userProjects);
addNavigationFunctionality(main, userProjects);
