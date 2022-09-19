import React, {useState} from 'react';
import QuestionCard from "./components/QuestionCard";

const App = () => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    const startTrivia = async () => {};

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
        <QuestionCard />
        <button className="next" onClick={nextQuestion}> Next one </button>
    </div>
  );
}

export default App;
