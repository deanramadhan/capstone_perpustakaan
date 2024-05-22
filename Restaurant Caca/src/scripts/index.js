import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const skipLink = document.querySelector('.skip-content');
const menuToggle = document.querySelector('.drawer');
const mainContent = document.querySelector('#explore');

const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('slide');
});
menuToggle.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    nav.classList.toggle('slide');
  }
});

skipLink.addEventListener('click', (event) => {
  event.preventDefault();
  mainContent.scrollIntoView({ behavior: 'smooth' });
  skipLink.blur();
});

const app = new App({
  button: document.querySelector('#drawer'),
  nav: document.querySelector('#navbar'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  console.log('load');
  app.renderPage();
  swRegister();
});
