import React, { useState } from 'react';

import ResultBanner from '../ResultBanner/ResultBanner';

function GuessInput({ handleAddGuess, result = '', numberOfGuesses, answer }) {
  const [guess, setGuess] = useState('');

  const handleChangeInput = (event) => {
    const newInput = event.target.value.toUpperCase();
    setGuess(newInput);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (!guess) return;

    handleAddGuess(guess);
    setGuess('');
  };

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmitForm}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          pattern=".{5}"
          minLength={5}
          maxLength={5}
          value={guess.toUpperCase()}
          onChange={handleChangeInput}
          disabled={result !== ''}
        />
      </form>

      {result && (
        <ResultBanner
          result={result}
          numberOfGuesses={numberOfGuesses}
          answer={answer}
        />
      )}
    </>
  );
}

export default GuessInput;
