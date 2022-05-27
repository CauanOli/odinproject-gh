import './sass/index.scss';
import showHeader from './js/header';
import showHome from './js/views/homeView';

const content = document.querySelector('#content');
const main = document.createElement('main');
const header = showHeader(main);

showHome(main);
content.appendChild(header);
content.appendChild(main);
