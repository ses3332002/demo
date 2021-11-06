import React, { useState, useEffect } from 'react';
import Option from '../Option';
import Button from '../Button';
import styles from './style';

export default function NewMove({
  gameCombination,
  moves,
  setMoves,
  isPlaying,
  setIsPlaying,
  gameId,
  setGameId,
}) {
  let [isSubmited, setIsSubmited] = useState(false);
  let [isDone, setIsDone] = useState(false);
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
    if (gameCombination === Number(currentMove)) {
      setIsDone(true);
      setIsPlaying(false);
    }
    setMoves([...moves, Number(currentMove)]);
    setIsSubmited(true);
  }

  if (isDone) {
    return (
      <div>
        Вы выиграли за {moves.length} хода(ов)
        <Button gameId={gameId} setGameId={setGameId} />
      </div>
    );
  } else {
    return (
      <form className={styles.move_set} autoComplete="off" onSubmit={e => submitMove(e)}>
        <Option key={1} isSubmited={isSubmited} setIsSubmited={setIsSubmited} />
        <Option key={2} isSubmited={isSubmited} setIsSubmited={setIsSubmited} />
        <Option key={3} isSubmited={isSubmited} setIsSubmited={setIsSubmited} />
        <Option key={4} isSubmited={isSubmited} setIsSubmited={setIsSubmited} />
        <button>Проверить</button>
      </form>
    );
  }
}
