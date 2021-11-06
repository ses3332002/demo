import React from 'react';
import styles from './style';

export default function Header({ isPlaying }) {
  if (!isPlaying) {
    return <header className={styles.header}></header>;
  } else {
    return <header className={styles.header}>Выберите вариант</header>;
  }
}
