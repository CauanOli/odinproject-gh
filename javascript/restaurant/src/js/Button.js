export default class Button {
  constructor(name, view) {
    this.button = document.createElement('button');
    this.button.classList.add(name);
    this.addView(view);
    this.button.textContent = name;
  }

  addView(view) {
    this.button.addEventListener('click', view);
  }

  changeState() {
    this.button.classList.add('active');
  }

  cleanState() {
    this.button.classList = '';
  }
}
