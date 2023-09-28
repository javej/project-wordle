import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

const DEFAULT_STATE = range(0, 5);

function Guess({ guess = DEFAULT_STATE, answer }) {
  const cellGroupValue =
    typeof guess === 'string' ? checkGuess(guess, answer) : DEFAULT_STATE;

  return (
    <p className="guess">
      {cellGroupValue.map((cellValue) => (
        <span key={crypto.randomUUID()} className={`cell ${cellValue?.status}`}>
          {cellValue?.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
