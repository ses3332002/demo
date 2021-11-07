import React, { useContext } from 'react';
import { GameContext } from '../App';

export default function Button() {
  let { gameId, setGameId } = useContext(GameContext);
  return <button onClick={() => handleEvent()}>Новая игра</button>;

  function handleEvent() {
    setGameId(gameId => {
      return gameId + 1;
    });
  }
}
