import React from 'react';
import styles from './style';

export default function Footer({ moves }) {
  if (moves.length > 0) {
    return (
      <footer className={styles.footer}>
        <div className={styles.description_wrapper}>
          <span className={styles.icon}>🐂</span> - присутствует и на своем месте,
        </div>
        <div className={styles.description_wrapper}>
          <span className={styles.icon}>🐄</span> - присутствует, но не на своем месте,
        </div>
        <div className={styles.description_wrapper}>
          <span className={styles.icon}>🙁</span> - отсутствует
        </div>
      </footer>
    );
  } else {
    return <footer className={styles.footer}></footer>;
  }
}
