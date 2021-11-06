import React from 'react';
import styles from './style';

export default function Result({ moveCombination, gameCombination }) {
  let moveArray = moveCombination.toString().split('');
  let gameArray = gameCombination.toString().split('');
  return (
    <div className={styles.result}>
      {moveArray.map((item, index) => {
        return item === gameArray[index] ? (
          <span className={styles.icon}>🐂</span>
        ) : gameArray.includes(item) ? (
          <span className={styles.icon}>🐄</span>
        ) : (
          <span className={styles.icon}>🙁</span>
        );
      })}
    </div>
  );
}
