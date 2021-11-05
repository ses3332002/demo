import React, { useState, useEffect } from 'react';

import styles from './style';

export default function Option({ isSubmited }) {
  let [selectorValue, setSelectorValue] = useState('0');
  useEffect(() => setSelectorValue('0'), [isSubmited]);

  return (
    <select
      value={selectorValue}
      onChange={e => {
        setSelectorValue(e.target.value);
      }}
    >
      <option value="0" disabled>
        ⬇️
      </option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>
  );
}
