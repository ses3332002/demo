import React, { useState } from 'react';
import Move from '../Move';
import NewMove from '../NewMove';

export default function Gamefield({ gameCombination }) {
  let [moves, setMoves] = useState([]);
  return (
    <>
      {moves.map((item, index) => {
        return <Move moveCombination={item} gameCombination={gameCombination} key={index} />;
      })}
      <NewMove gameCombination={gameCombination} moves={moves} setMoves={setMoves} />
    </>
  );
}
