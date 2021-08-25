import React from 'react';
// import styles from './style';

export default function Footer({ gameState, setGameState }) {
  let buttonString;
  if (gameState === 'stopped') {
    buttonString = 'Начать';
  } else if (gameState === 'playing') {
    buttonString = 'Проверить';
  }
  return (
    <footer>
      <button onClick={event => handleEvent()}>{buttonString}</button>
    </footer>
  );

  function handleEvent() {
    if (gameState === 'stopped') {
      setGameState('playing');
    } else {
      setGameState('stopped');
    }
  }
}
