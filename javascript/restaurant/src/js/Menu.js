export default class Menu {
  constructor(buttons) {
    this.buttons = buttons;
    this.ul = document.createElement('ul');
    this.nav = document.createElement('nav');
    this.createMenuList();
    this.addButtonSwitch();
    this.nav.appendChild(this.ul);
  }

  createMenuList() {
    this.buttons.forEach((btn) => {
      const li = document.createElement('li');
      li.appendChild(btn.button);
      this.ul.appendChild(li);
    });
  }

  addButtonSwitch() {
    this.buttons.forEach((btn) => {
      btn.button.addEventListener('click', () => {
        if (btn.state !== 'active') {
          btn.changeState();
        }
        const otherButtons = this.buttons.filter((button) => (button.button !== btn.button));
        otherButtons.forEach((button) => {
          button.button.classList = '';
        });
      });
    });
  }
}
