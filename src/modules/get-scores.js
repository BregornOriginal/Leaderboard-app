import { GAME_ID, api } from './newGame.js';

const getScores = async () => {
  const getData = await fetch(`${api}/games/${GAME_ID}/scores/`);
  const recivedScores = getData.json();
  return recivedScores;
};

export default getScores;
