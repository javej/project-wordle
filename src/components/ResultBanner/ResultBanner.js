import React from 'react';

function ResultBanner({ result, numberOfGuesses, answer }) {
  const winMessage = (
    <p>
      <strong>Congratulations!</strong> Got it in {''}
      <strong>{`${numberOfGuesses} ${
        numberOfGuesses === 1 ? 'guess' : 'guesses'
      }`}</strong>
      .
    </p>
  );

  const loseMessage = (
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>
  );

  return (
    <div className={`${result} banner`}>
      {result === 'happy' ? winMessage : loseMessage}
    </div>
  );
}

export default ResultBanner;
