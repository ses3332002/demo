import React from 'react';
import Button from '../Button';
// import styles from './style';

export default function Header({ gameState, setGameState }) {
  if (gameState === 'stopped') {
    return (
      <header>
        <Button gameState={gameState} setGameState={setGameState} />
      </header>
    );
  } else {
    return <header>Выберите вариант</header>;
  }
}
