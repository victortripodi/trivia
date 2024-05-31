import React, { useState, useEffect } from 'react';

const Questions = ({ level, category }) => {
  const [error, setError] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);


//Fetch data from API opentdb 
  const fetchTrivia = async () => {
    try {
      const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${level}`);
      const data = await response.json();
      setQuestions(data.results);
    } catch (error) {
      console.error('Error fetching questions:', error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchTrivia();
  }, []);


//Event Handler Functions
  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setAnswerSubmitted(true);
    if (answer === questions[currentQuestionIndex].correct_answer) {
      setCorrectAnswersCount(correctAnswersCount + 1);
    }
  };

  const handleNextClick = (answer) => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer(null);
    setAnswerSubmitted(false);
  };
  


//Questions
  const question = () => {
    if (questions.length > 0 && currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
      return (
        <div>
          <h2>{currentQuestion.question}</h2>
          {currentQuestion.incorrect_answers.map((options, index) => (
            <button onClick={() => handleAnswerClick(options)} key={options + "-" + index}>{options}</button>
          ))}
          <button onClick={() => handleAnswerClick(currentQuestion.correct_answer)}>{currentQuestion.correct_answer}</button>
        </div>
      );
    } else {
      return;
    }
  };

//Answers
  const answers = () => {
    if (answerSubmitted && questions.length > 0 && currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
      if (selectedAnswer === currentQuestion.correct_answer) {
        return <p>"You did it"</p>;
      } else {
        return <p>"Unlucky"</p>;
      }
    } else {
      return null;
    }
  };

//Results
  const message = () => {
    if (correctAnswersCount === 0) {
      return `Really? Your score was ${correctAnswersCount}. Please come back later.`;
    } else if (correctAnswersCount > 0 && correctAnswersCount < 5) {
      return `Keep trying! Your score was ${correctAnswersCount}.`;
    } else if (correctAnswersCount >= 5 && correctAnswersCount < 9) {
      return `Great job! Your score was ${correctAnswersCount}.`;
    } else {
      return `You are a legend!!! Your score was ${correctAnswersCount}.`;
    }
  };


//Render
  return (
    <div>
    <div>
      {currentQuestionIndex < questions.length ? <h1>Questions</h1> : <h1>Results</h1>}
      {currentQuestionIndex !== questions.length && <p>Question {currentQuestionIndex + 1+"/10"}</p>}
      {question()}
      {answers()}
      {currentQuestionIndex !== questions.length && <button onClick={handleNextClick} disabled={!answerSubmitted}>Next</button>}
      {currentQuestionIndex === questions.length && <p>{message()}</p>}
    </div>
    </div>
  );
};

export default Questions;
