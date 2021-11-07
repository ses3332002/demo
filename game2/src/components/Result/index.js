import React, { useContext } from 'react';
import { GameContext } from '../App';
import styles from './style';

export default function Result({ moveCombination }) {
  let { gameCombination } = useContext(GameContext);
  let moveArray = moveCombination.toString().split('');
  let gameArray = gameCombination.toString().split('');
  return (
    <div className={styles.result}>
      {moveArray.map((item, index) => {
        return item === gameArray[index] ? (
          <span key={index} className={styles.icon}>
            🐂
          </span>
        ) : gameArray.includes(item) ? (
          <span key={index} className={styles.icon}>
            🐄
          </span>
        ) : (
          <span key={index} className={styles.icon}>
            🙁
          </span>
        );
      })}
    </div>
  );
}
