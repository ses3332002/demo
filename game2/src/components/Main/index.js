import React from 'react';
import Move from '../Move';
// import styles from './style';

export default function Main({ gameState }) {
  if (gameState === 'stopped') {
    return <main></main>;
  } else {
    return (
      <main>
        <Move />
      </main>
    );
  }
}
