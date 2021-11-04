import React from 'react';
// import styles from './style';

export default function Header({ gameState, setGameState }) {
  let buttonString;

  if (gameState === 'stopped') {
    return (
      <header>
        <button onClick={event => handleEvent()}>Начать игру</button>
      </header>
    );
  } else {
    return <header></header>;
  }

  function handleEvent() {
    if (gameState === 'stopped') {
      setGameState('playing');
    }
  }
}
