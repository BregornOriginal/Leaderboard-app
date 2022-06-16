import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import './style.css';

import getScores from './modules/refresh';
import showScore from './modules/refresh';

const refreshButton = document.querySelector('.refresh-button');

console.log(getScores)

refreshButton.addEventListener('click',() => {
  const scores = document.querySelector('.list-of-scores');
  scores.innerHTML = '';
  showScore();
});
