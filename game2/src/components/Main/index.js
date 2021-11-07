import React, { useState, useEffect, useContext } from 'react';
import { GameContext } from '../App';
import Footer from '../Footer';
import Gamefield from '../Gamefield';
import Header from '../Header';
import styles from './style';

export default function Main() {
  let { gameId } = useContext(GameContext);
  let [moves, setMoves] = useState([]);
  let [isPlaying, setIsPlaying] = useState(true);
  useEffect(() => {
    setMoves([]);
    setIsPlaying(true);
  }, [gameId]);

  return (
    <>
      <Header isPlaying={isPlaying} />
      <main className={styles.main}>
        <Gamefield setIsPlaying={setIsPlaying} moves={moves} setMoves={setMoves} />
      </main>
      <Footer moves={moves} />
    </>
  );
}
