import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import './style.css';

import showScore from './modules/refresh';
import { getInputData } from './modules/elements';

const refreshButton = document.querySelector('.refresh-button');
const submitButton = document.querySelector('.submit-button');

refreshButton.addEventListener('click',() => {
  const scores = document.querySelector('.list-of-scores');
  scores.innerHTML = '';
  showScore();
});

submitButton.addEventListener('click', () => {
  getInputData();
});
