import React, {useState} from 'react';
//Types
import {Difficulty, fetchQuizQuestions, QuestionState} from "./API";
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

    // console.log(fetchQuizQuestions(TOTAL_QUESTION, Difficulty.EASY ));
    console.log(questions);

    const startTrivia = async () => {
        setLoading(true); //when we click the button we trigger the API fetch, so we loading something
        setGameOver(false);

        const newQuestions = await fetchQuizQuestions(
            TOTAL_QUESTION,
            Difficulty.EASY
        )

        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false); //because we don't load anymore
    };

    const startQuiz = async () => {

    }
    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

    }

    const nextQuestion = () => {

    }

  return (
    <div className="App">
        <h1> REACT QUIZ </h1>
        {gameOver || userAnswers.length === TOTAL_QUESTION ? (
            <button className="start" onClick={startTrivia}> Let's start!  </button>
        ): null}
        {!gameOver ? <p className="score">Score: </p> : null}
        {loading ? <p> Loading Questions... </p> : null}
        {!loading && !gameOver ? (
        <QuestionCard
            questionNr={number + 1} 
            totalQuestions={TOTAL_QUESTION}
            question={questions[number].question}
            answers = {questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
        />
            ) : null}
        <button className="next" onClick={nextQuestion}> Next one </button>
    </div>
  );
}

export default App;
