import React from "react";

function GuessInput({handleSubmitGuess,gameStatus}) {
  const [guess,setGuess] = React.useState('');
  function submitInput(guessInput) {
    // console.info(guessInput);
    if(guess.length !== 5){
    window.alert('Please enter a 5 letter word')
    return;
    }   
    console.info({guess} , " ");
    handleSubmitGuess(guess);
  }
  return (
    <form className="guess-input-wrapper"
    onSubmit={event => {
      event.preventDefault();
      submitInput(guess);
      // console.log(guessInput);
      setGuess('');
      // console.log(guessInput);
    }}>
  <label htmlFor="guess-input">Enter guess:</label>
  <input 
  required
  disabled={gameStatus !== 'running'}
  minLength={5}
  maxLength={5}
  id="guess-input" 
  type="text" 
  value = {guess} 
  onChange={event => {setGuess(event.target.value.toUpperCase())}}/>
</form>
  );
}

export default GuessInput;
