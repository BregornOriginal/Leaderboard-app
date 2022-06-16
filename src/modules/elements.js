const listOfScores = document.querySelector('.list-of-scores');

const createLi = (text) => {
  const newLi = document.createElement('li');
  newLi.classList.add('scores');
  newLi.innerHTML = text;
  listOfScores.appendChild(newLi);
}

export default createLi;
