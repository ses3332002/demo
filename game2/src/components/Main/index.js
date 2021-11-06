import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import Gamefield from '../Gamefield';
import Header from '../Header';
// import styles from './style';

export default function Main({ gameCombination, gameId, setGameId }) {
  let [moves, setMoves] = useState([]);
  let [isPlaying, setIsPlaying] = useState(true);
  useEffect(() => {
    setMoves([]);
    setIsPlaying(true);
  }, [gameId]);

  return (
    <>
      <Header isPlaying={isPlaying} />
      <main>
        <Gamefield
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          gameCombination={gameCombination}
          moves={moves}
          setMoves={setMoves}
          gameId={gameId}
          setGameId={setGameId}
        />
      </main>
      <Footer moves={moves} />
    </>
  );
}
