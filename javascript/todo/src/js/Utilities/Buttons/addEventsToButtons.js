import removeActiveFromOtherButtons from "./removeActiveFromOtherButton";

export default function addEventsToButtons(buttons, events, container, userProjects) {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      if (!buttons[i].classList.contains('active')) {
        buttons[i].classList.add('active');
        events[i](container, userProjects);
      }
      removeActiveFromOtherButtons(buttons[i]);
    });
  }
}
