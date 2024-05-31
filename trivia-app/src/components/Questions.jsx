import React, { useState, useEffect, useCallback, useMemo } from 'react';


const API_URL = "https://opentdb.com/api.php"
const QUESTIONS_AMOUNT = 10


const shuffle = (array) => {
  let currentIndex = array.length;

  while (currentIndex != 0) {

    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

const Questions = ({ level, category, onRestart }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState([]);
  const [questions, setQuestions] = useState([]); // questions from API 

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // selected answer by user
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0); // points

  const answerSubmitted = selectedAnswer != null
  const currentQuestion = questions.length ? questions[currentQuestionIndex] : null

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


  const asnwers = useMemo(() => {
    if (currentQuestion) {
      const answersArray = currentQuestion.incorrect_answers.map((option, index) => {
        return {
          text: option.replace(/&quot;/g, '\"').replace(/&#039;/g, '\''),
          isCorrect: false
        }
      })
      answersArray.push({
        text: currentQuestion.correct_answer.replace(/&quot;/g, '\"').replace(/&#039;/g, '\''),
        isCorrect: true
      })

      shuffle(answersArray)
      return answersArray
    }
    return []

  }, [currentQuestion])

  // Question
  const question = () => {
    if (questions.length > 0) {
      const currentQuestionFixed = currentQuestion.question.replace(/&quot;/g, '\"').replace(/&#039;/g, '\'')

      return (
        <div style={{ padding: '30px' }}>
          <h3>{currentQuestionFixed}</h3>
          <div className='grid-container'>
            {asnwers.map((option, index) => (
              <button disabled={answerSubmitted} onClick={() => handleAnswerClick(option.text)} key={option.text + "-" + index} style={option.isCorrect && answerSubmitted ? correctAnswerButtonStyle : {}}>{option.text}</button>
            ))}
          </div>
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
        return <p>Well done!</p>;
      } else {
        return <p>Wrong! ☹️ the correct answer is: {currentQuestion.correct_answer} </p>;
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
      {isLoading ? <div className='loading'>Loading...</div> :
        <div>
          {isPlaying ?
            <div>
              <h2>Question {currentQuestionIndex + 1 + `/${QUESTIONS_AMOUNT}`}</h2>
              {question()}
              {result()}
            </div> :
            <div>
              <h2>Results</h2>
              {currentQuestionIndex === questions.length && <p>{message()}</p>}
            </div>
          }
          <div>
            {currentQuestionIndex !== questions.length && <button className='back-button' onClick={handleNextClick} disabled={!answerSubmitted}>Next</button>}
            <button className='back-button' onClick={onRestart}>Restart</button>
          </div>
        </div>
      }
    </div>
  );
};


const correctAnswerButtonStyle = {
  border: '5px solid green',
};

export default Questions;
