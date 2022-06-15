const scores = document.querySelector('.list-of-scores');

const createLi = (text) => {
  const newLi = document.createElement('li');
  newLi.innerHTML = text;
  scores.appendChild(newLi);
}

export default createLi;
