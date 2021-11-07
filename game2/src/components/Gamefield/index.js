import React from 'react';
import Move from '../Move';
import NewMove from '../NewMove';

export default function Gamefield({ setIsPlaying, moves, setMoves }) {
  return (
    <>
      {moves.map((item, index) => {
        return <Move moveCombination={item} key={index} />;
      })}
      <NewMove moves={moves} setMoves={setMoves} setIsPlaying={setIsPlaying} />
    </>
  );
}
