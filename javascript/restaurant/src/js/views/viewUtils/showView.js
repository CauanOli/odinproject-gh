export default function showView(view, container) {
  view.elements.forEach((element) => {
    container.appendChild(element);
  });
  container.classList.add(view.title);
}
