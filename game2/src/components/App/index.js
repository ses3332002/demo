import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Main from '../Main';
// import styles from './style';

export default function App() {
  let [gameState, setGameState] = useState('stopped');
  return (
    <>
      <Header gameState={gameState} setGameState={setGameState} />
      <Main gameState={gameState} />
    </>
  );
}
