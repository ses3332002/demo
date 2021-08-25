import React, { useState } from 'react';
import Option from '../Option';
import styles from './style';

export default function Move({ gameState }) {
  let [moveIsDisabled, setMoveIsDisabled] = useState(false);
  return (
    <div className={styles.move_set}>
      <Option moveIsDisabled={moveIsDisabled} key={1} />
      <Option moveIsDisabled={moveIsDisabled} key={2} />
      <Option moveIsDisabled={moveIsDisabled} key={3} />
      <Option moveIsDisabled={moveIsDisabled} key={4} />
    </div>
  );
}
