import NewUserScore from "./newUser";
import addScoreToApi from "./newScore";

const listOfScores = document.querySelector('.list-of-scores');
let nameInput = document.querySelector('.name-input');
let scoreInput = document.querySelector('.score-input');
let errorMessage = document.querySelector('.error-messsage');

const createLi = (text) => {
  const newLi = document.createElement('li');
  newLi.classList.add('scores');
  newLi.innerHTML = text;
  listOfScores.appendChild(newLi);
}

const getInputData = () => {
  errorMessage.innerHTML = '';
  if (nameInput.value && scoreInput.value) {
    const userScore = new NewUserScore(nameInput.value, scoreInput.value);
    console.log(userScore);
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
