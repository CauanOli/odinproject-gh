export default function updateLocalStorage(userProjects) {
  localStorage.setItem('todoUserProjects', JSON.stringify(userProjects));
}