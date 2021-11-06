import React from 'react';
// import styles from './style';

export default function Header({ isPlaying }) {
  if (!isPlaying) {
    return <header></header>;
  } else {
    return <header>Выберите вариант</header>;
  }
}
