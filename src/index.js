import menu from './menu.json';
import refs from './js/refs.js';
import markUp from './templetes/markUp.handlebars';
const { menuJS, themeSwitchToggle } = refs;
let result = markUp(menu);
menuJS.insertAdjacentHTML('beforeend', result);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

themeSwitchToggle.addEventListener('change', e => {
  document.body.classList.toggle(Theme.DARK);
  document.body.classList.toggle(Theme.LIGHT);
  let theme = e.target.checked ? Theme.DARK : Theme.LIGHT;
  localStorage.setItem('theme', theme);
});

let theme = localStorage.getItem('theme');

if (!theme) {
  theme = Theme.LIGHT;
  localStorage.setItem('theme', theme);
}
document.body.classList.add(theme);
themeSwitchToggle.checked = theme === Theme.LIGHT ? false : true;