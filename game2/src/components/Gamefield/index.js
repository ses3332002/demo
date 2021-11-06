import React from 'react';
import Move from '../Move';
import NewMove from '../NewMove';

export default function Gamefield({
  setIsPlaying,
  gameCombination,
  moves,
  setMoves,
  gameId,
  setGameId,
}) {
  return (
    <>
      {moves.map((item, index) => {
        return <Move moveCombination={item} gameCombination={gameCombination} key={index} />;
      })}
      <NewMove
        gameCombination={gameCombination}
        moves={moves}
        setMoves={setMoves}
        setIsPlaying={setIsPlaying}
        gameId={gameId}
        setGameId={setGameId}
      />
    </>
  );
}
