import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput/GuessInput';
import GuessResult from '../GuessResult/GuessResult';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';



// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
   const [gameStatus,setGameStatus] = React.useState('running');
 const [guessWords, setGuessWords] = React.useState([]);


 function handleSubmitGuess(guess){
   const nextGuessWords = [...guessWords,guess];
    setGuessWords(nextGuessWords);
    if(guess.toUpperCase() === answer){
      setGameStatus('won');
    } else if (nextGuessWords.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }

 }
  return (<>
  <GuessResult guessWords = {guessWords} answer={answer} />
  <GuessInput handleSubmitGuess = {handleSubmitGuess} gameStatus={gameStatus}/>
  {gameStatus === 'won' && 
  <WonBanner noOfGuesses={guessWords.length}/>}
  {gameStatus === 'lost' &&
  <LostBanner answer={answer}/>}
  </>);
}

export default Game;
