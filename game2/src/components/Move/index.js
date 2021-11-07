import React from 'react';

import Result from '../Result';
import styles from './style';

export default function Move({ moveCombination }) {
  return (
    <div className={styles.move_set}>
      <div className={styles.move}>
        <span className={styles.digit} key={0}>
          {moveCombination.toString().at(0)}
        </span>
        <span className={styles.digit} key={1}>
          {moveCombination.toString().at(1)}
        </span>
        <span className={styles.digit} key={2}>
          {moveCombination.toString().at(2)}
        </span>
        <span className={styles.digit} key={3}>
          {moveCombination.toString().at(3)}
        </span>
      </div>
      <Result moveCombination={moveCombination} />
    </div>
  );
}
