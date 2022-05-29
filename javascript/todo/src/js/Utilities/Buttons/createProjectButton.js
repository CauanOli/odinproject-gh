export default function createProjectButton(project) {
  const projectButton = document.createElement('button');
  projectButton.innerText = project.name;
  return projectButton;
}
