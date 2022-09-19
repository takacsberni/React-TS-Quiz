import React from 'react';

const App = () => {
    const startQuiz = async () => {

    }
    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

    }

    const nextQuestion = () => {

    }

  return (
    <div className="App">
        <h1> REACT QUIZ </h1>
        <button className="start" onClick={startQuiz}> Let's start!  </button>
        <p className="score">Score: </p>
        <p> Loading Questions... </p>
    </div>
  );
}

export default App;
