import React, { useState } from 'react';

import Main from '../Main';

import styles from './style';

export default function App() {
  let gameCombination = generateCombination();
  let [gameId, setGameId] = useState(1);
  return (
    <>
      <Main gameCombination={gameCombination} gameId={gameId} setGameId={setGameId} />
    </>
  );

  function generateCombination() {
    const [min, max] = [1, 9];
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
