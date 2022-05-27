import createMenu from './createMenu';

export default function showHeader(viewContainer) {
  const header = document.createElement('header');
  const menu = createMenu(viewContainer);
  header.appendChild(menu.menu);
  return header;
}
