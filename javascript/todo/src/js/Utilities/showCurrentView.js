import kanbanView from "../Views/kanban";
import overViewView from "../Views/overview";
import projectView from "../Views/project";

export default function showCurrentView(container, userProjects, project = '') {
  if(container.classList.contains('kanban')) {
    kanbanView(container, userProjects);
  } else if(container.classList.contains('overview')) {
    overViewView(container, userProjects);
  } else if (container.classList.contains('project') && project != '') {
    projectView(container, project)
  }
}