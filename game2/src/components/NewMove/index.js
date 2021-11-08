import React, { useState, useEffect, useContext } from 'react';
import Option from '../Option';
import Button from '../Button';
import styles from './style';
import { GameContext } from '../App';

export default function NewMove({ moves, setMoves, setIsPlaying }) {
  let [isSubmited, setIsSubmited] = useState(false);
  let [isDone, setIsDone] = useState(false);
  let { gameCombination, gameId } = useContext(GameContext);
  useEffect(() => {
    setIsDone(false);
  }, [gameId]);

  useEffect(() => setIsSubmited(false));

  function submitMove(e) {
    e.preventDefault();
    let currentMove = '';
    for (let i = 0; i < 4; i++) {
      if (e.target[i].value === '0') {
        return;
      }
      currentMove += e.target[i].value;
    }
    navigator.vibrate(150);
    if (gameCombination === Number(currentMove)) {
      setIsDone(true);
      setIsPlaying(false);
    }
    setMoves([...moves, Number(currentMove)]);
    setIsSubmited(true);
  }

  if (isDone) {
    return (
      <div className={styles.form_result}>
        <div className={styles.form_message}>Вы выиграли за {moves.length} хода(ов)</div>
        <Button />
      </div>
    );
  } else {
    return (
      <form className={styles.move_set} autoComplete="off" onSubmit={e => submitMove(e)}>
        <Option key={1} isSubmited={isSubmited} setIsSubmited={setIsSubmited} />
        <Option key={2} isSubmited={isSubmited} setIsSubmited={setIsSubmited} />
        <Option key={3} isSubmited={isSubmited} setIsSubmited={setIsSubmited} />
        <Option key={4} isSubmited={isSubmited} setIsSubmited={setIsSubmited} />
        <button className={styles.check_button}>Проверить</button>
      </form>
    );
  }
}
