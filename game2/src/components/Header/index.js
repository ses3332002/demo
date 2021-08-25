import React from 'react';
// import styles from './style';

export default function Header({ gameState }) {
  let headerString;
  if (gameState === 'stopped') {
    headerString = 'Быки и коровы';
  } else if (gameState === 'playing') {
    headerString = 'Сделайте ход';
  }

  return <header>{headerString}</header>;
}
