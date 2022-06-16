import { createLi } from './elements.js';
import getScores from './get-scores.js';

const showScore = () => {
  const leaderboardData = getScores();
  leaderboardData.then((value) => {
    if (value.result) {
      value.result.forEach((element) => {
        const text = `${element.user}: ${element.score}`;
        createLi(text);
      });
    }
  });
};

export default showScore;
