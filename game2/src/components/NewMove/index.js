import React, { useState } from 'react';
import Option from '../Option';
import styles from './style';

export default function NewMove({ gameCombination, moves, setMoves }) {
  let [isSubmited, setIsSubmited] = useState(false);

  function submitMove(e) {
    e.preventDefault();
    let currentMove = '';
    for (let i = 0; i < 4; i++) {
      if (e.target[i].value === '0') {
        return;
      }
      currentMove += e.target[i].value;
    }
    if (gameCombination === Number(currentMove)) {
      console.log('you win');
    } else {
      console.log('move submited');
      setIsSubmited(true);
      setMoves([...moves, Number(currentMove)]);
    }
  }

  return (
    <>
      <form className={styles.move_set} onSubmit={e => submitMove(e)}>
        <Option key={1} />
        <Option key={2} />
        <Option key={3} />
        <Option key={4} />
        <button>Проверить</button>
      </form>
    </>
  );
}
