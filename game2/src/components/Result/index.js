import React from 'react';

export default function Result({ moveCombination, gameCombination }) {
  let moveArray = moveCombination.toString().split('');
  let gameArray = gameCombination.toString().split('');
  return (
    <>
      {moveArray.map((item, index) => {
        return item === gameArray[index] ? `🐂` : gameArray.includes(item) ? `🐄` : `🙁`;
      })}
    </>
  );
}
