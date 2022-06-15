import createLi from "./elements";
import getScores from "./get-scores";

const showScore = () => {
const leaderboardData = getScores();
leaderboardData.then((value) => {
  if (value.result) {
      value.result.forEach(element => {
        console.log(element)
        const text = `${element.user}: ${element.score}`;
        createLi(text);
        console.log(text)
      });
    };
  })
};

export default showScore;
