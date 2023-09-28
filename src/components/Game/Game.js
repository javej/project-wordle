import React, { useState } from 'react';

import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

let result = '';

function Game() {
  const [guessResults, setGuessResults] = useState([]);

  const handleAddGuess = (newGuess) => {
    const newGuesses = [...guessResults, newGuess];
    setGuessResults(newGuesses);

    if (newGuess === answer) result = 'happy';
    if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) result = 'sad';
  };

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput
        handleAddGuess={handleAddGuess}
        result={result}
        numberOfGuesses={guessResults.length}
        answer={answer}
      />
    </>
  );
}

export default Game;
