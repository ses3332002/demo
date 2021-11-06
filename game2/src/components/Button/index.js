import React from 'react';

export default function Button({ gameId, setGameId }) {
  return <button onClick={() => handleEvent()}>Новая игра</button>;

  function handleEvent() {
    setGameId(gameId => {
      return gameId + 1;
    });
  }
}
