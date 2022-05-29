export default function addProjectsToForm(userProjects) {
  const noteForm = document.querySelector('#new-note-form');
  const formField = noteForm[3];
  userProjects.forEach((project) => {
      const formOption = document.createElement('option');
      formOption.value = project.name;
      formOption.innerText = project.name;
      formField.appendChild(formOption);
    })
};
