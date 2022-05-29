export default function removeActiveFromOtherButtons (button) {
  const allButtons = [...document.querySelectorAll('button')];
  const otherButtons = allButtons.filter((btn) => btn != button);
  otherButtons.forEach((element) => element.classList.remove('active'));
}
