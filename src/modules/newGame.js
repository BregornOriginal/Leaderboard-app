const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const GAME_ID = 't51dVC8ZjqCBF7OnX91u';

export const newGame = () => {
  fetch(api, {
    method: 'POST',
    body: JSON.stringify({
      name: 'Julio Game',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
};

export { GAME_ID, api };
