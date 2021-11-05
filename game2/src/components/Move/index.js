import React from 'react';
import Result from '../Result';
import styles from './style';

export default function Move({ moveCombination, gameCombination }) {
  // let [moveIsDisabled, setMoveIsDisabled] = useState(false);
  // console.log(moveCombination);
  return (
    <>
      <div className={styles.move_set}>
        <span key={0}>{moveCombination.toString().at(0)}</span>
        <span key={1}>{moveCombination.toString().at(1)}</span>
        <span key={2}>{moveCombination.toString().at(2)}</span>
        <span key={3}>{moveCombination.toString().at(3)}</span>
      </div>
      <Result moveCombination={moveCombination} gameCombination={gameCombination} />
    </>
  );
}
