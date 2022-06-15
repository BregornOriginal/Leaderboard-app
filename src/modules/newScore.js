const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const GAME_ID = 'bKsXdJ25X3KNYzp5Qrbc';

const addScore = async () => {
  const newScore = await fetch(`${api}games/${GAME_ID}/scores/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      user: 'Julio',
      score: 30,
    }),
  })
  return newScore.json();
}

export default addScore;
