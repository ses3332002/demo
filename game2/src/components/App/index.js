import React, { useState, createContext } from 'react';
import Main from '../Main';

import styles from './style';

export let GameContext = createContext(null);

export default function App() {
  let gameCombination = generateCombination();
  let [gameId, setGameId] = useState(1);
  return (
    <GameContext.Provider
      value={{
        gameId,
        setGameId,
        gameCombination,
      }}
    >
      <Main />
    </GameContext.Provider>
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
