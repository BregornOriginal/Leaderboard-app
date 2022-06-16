import { GAME_ID, api } from './newGame.js';

const addScoreToApi = async (userScore) => {
  const newScore = await fetch(`${api}/games/${GAME_ID}/scores/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ user: userScore.name, score: userScore.score }),
  });
  return newScore;
};

export default addScoreToApi;
