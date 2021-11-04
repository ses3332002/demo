import React from 'react';
import Gamefield from '../Gamefield';
// import styles from './style';

export default function Main({ gameState }) {
  const [min, max] = [1, 9];
  if (gameState === 'stopped') {
    return <main></main>;
  } else {
    let gameCombination = generateCombination();
    return (
      <main>
        <Gamefield gameCombination={gameCombination} />
      </main>
    );
  }

  function generateCombination() {
    let combination = '';
    for (let i = 0; i < 4; i++) {
      let digit;
      do {
        digit = Math.floor(min + Math.random() * max) + '';
      } while (combination.includes(digit.toString()));
      combination += digit;
    }
    return +combination;
  }
}
