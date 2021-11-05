import React from 'react';

export default function Button({ gameState, setGameState }) {
  return <button onClick={() => handleEvent()}>Новая игра</button>;

  function handleEvent() {
    if (gameState === 'stopped') {
      setGameState('playing');
    }
  }
}
