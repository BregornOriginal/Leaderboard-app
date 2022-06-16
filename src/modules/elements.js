import NewUserScore from './newUser.js';
import addScoreToApi from './newScore.js';

const listOfScores = document.querySelector('.list-of-scores');
const nameInput = document.querySelector('.name-input');
const scoreInput = document.querySelector('.score-input');
const errorMessage = document.querySelector('.error-message');

const createLi = (text) => {
  const newLi = document.createElement('li');
  newLi.classList.add('scores');
  newLi.innerHTML = text;
  listOfScores.appendChild(newLi);
};

const getInputData = () => {
  errorMessage.innerHTML = '';
  if (nameInput.value && scoreInput.value) {
    const userScore = new NewUserScore(nameInput.value, scoreInput.value);
    addScoreToApi(userScore);
    nameInput.value = '';
    scoreInput.value = '';
  } else {
    errorMessage.innerHTML = 'Please complete the fields';
  }
  setTimeout(() => {
    errorMessage.innerText = '';
  }, 2000);
};

export { createLi, getInputData };
