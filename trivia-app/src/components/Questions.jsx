import React, { useState, useEffect } from 'react';

const Questions = ({ level, category }) => {
  const [error, setError] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);

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



  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setAnswerSubmitted(true);
  };

  const handleNextClick = (answer) => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer(null);
    setAnswerSubmitted(false);
  };
  

  const result = () => {
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

  const renderQuestion = () => {
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
      return <p>No more questions</p>;
    }
  };

  return (
    <div>
    <div>
      <h1>Questions</h1>
      {renderQuestion()}
      {result()}
      <button onClick={handleNextClick} disabled={!answerSubmitted}>Next</button>
    </div>
    </div>
  );
};

export default Questions;
