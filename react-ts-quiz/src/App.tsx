import React, {useState} from 'react';
//Types
import {QuestionState, Difficulty, fetchQuizQuestions} from "./API";
//Components
import QuestionCard from "./components/QuestionCard";

type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

const TOTAL_QUESTION = 10;

const App = () => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    console.log(fetchQuizQuestions(TOTAL_QUESTION, Difficulty.EASY ));

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
        {/*<QuestionCard*/}
        {/*    questionNr={number + 1} /!*because they start from 0*!/*/}
        {/*    totalQuestions={TOTAL_QUESTION}*/}
        {/*    question={questions[number].question}*/}
        {/*    answers = {questions[number].answers}*/}
        {/*    userAnswer={userAnswers ? userAnswers[number] : undefined}*/}
        {/*    callback={checkAnswer}*/}
        {/*/>*/}
        <button className="next" onClick={nextQuestion}> Next one </button>
    </div>
  );
}

export default App;
