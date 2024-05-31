import React, { useState, useEffect, useCallback } from 'react';


const API_URL = "https://opentdb.com/api.php"
const QUESTIONS_AMOUNT = 10

const Questions = ({ level, category, onRestart }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState([]);
  const [questions, setQuestions] = useState([]); // questions from API 

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // selected answer by user
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0); // points

  const answerSubmitted = selectedAnswer != null
  const currentQuestion = questions.length ? questions[currentQuestionIndex] : null

  console.log("currentQuestion", { currentQuestion, questions, currentQuestionIndex })
  //Fetch data from API opentdb 
  const fetchTrivia = async () => {
    try {
      const response = await fetch(`${API_URL}?amount=${QUESTIONS_AMOUNT}&category=${category}&difficulty=${level}`);
      const data = await response.json();
      setIsLoading(false)
      setQuestions(data.results);
    } catch (error) {
      console.error('Error fetching questions:', error);
      setError(true);
    }
  };

  useEffect(() => {
    // on mount fetch trivia questions
    fetchTrivia();
  }, []);


  //Event Handler Functions
  const handleAnswerClick = useCallback((answer) => {
    setSelectedAnswer(answer);

    if (answer === currentQuestion.correct_answer) {
      setCorrectAnswersCount(correctAnswersCount + 1);
    }
  }, [currentQuestion, currentQuestionIndex, correctAnswersCount]);

  const handleNextClick = useCallback(() => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer(null);

  }, [currentQuestionIndex]);


  // Question
  const question = () => {
    if (questions.length > 0) {
      const currentQuestionFixed = currentQuestion.question.replace(/&quot;/g, '\"').replace(/&#039;/g, '\'')
      return (
        <div>
          <h2>{currentQuestionFixed}</h2>
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

  // Result
  const result = () => {
    if (answerSubmitted && questions.length > 0) {
      if (selectedAnswer === currentQuestion.correct_answer) {
        return <p>"You did it"</p>;
      } else {
        return <p>"Unlucky"</p>;
      }
    } else {
      return null;
    }
  };

  // Final Results
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

  const isPlaying = currentQuestionIndex < questions.length

  return (
    <div>
      {isLoading ? <div>Loading...</div> :
        <div>
          {isPlaying ?
            <div>
              <h1>Questions</h1>
              {currentQuestionIndex !== questions.length && <p>Question {currentQuestionIndex + 1 + `/${QUESTIONS_AMOUNT}`}</p>}
              {question()}
              {result()}
              {currentQuestionIndex !== questions.length && <button onClick={handleNextClick} disabled={!answerSubmitted}>Next</button>}
            </div> :
            <div>
              <h1>Results</h1>
              {currentQuestionIndex === questions.length && <p>{message()}</p>}
            </div>
          }
          <button onClick={onRestart}>Restart</button>
        </div>
      }
    </div>
  );
};

export default Questions;
