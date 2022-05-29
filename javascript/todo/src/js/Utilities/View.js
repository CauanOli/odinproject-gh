export default function View(container, content) {
  container.innerHTML = '';
  content.forEach((element) => {
    container.appendChild(element);
  });
}
