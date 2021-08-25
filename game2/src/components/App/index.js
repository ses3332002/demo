import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
// import styles from './style';

export default function App() {
  let [gameState, setGameState] = useState('stopped');
  return (
    <>
      <Header gameState={gameState} />
      <Main gameState={gameState} />
      <Footer gameState={gameState} setGameState={setGameState} />
    </>
  );
}
