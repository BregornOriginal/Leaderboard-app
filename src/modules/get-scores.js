import { GAME_ID, api } from "./newGame";

const getScores = async () => {
  const getData = await fetch(`${api}/games/${GAME_ID}/scores/`)
  const recivedScores = getData.json();
  console.log(recivedScores)
  return recivedScores;
}

export default getScores;
