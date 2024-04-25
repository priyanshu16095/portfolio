import React, { useState } from 'react'
import data from './data'
import Question from './Question'
import Result from './Result'

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])

  function handleNextQuestion(isCorrect) {
    setCurrentQuestion(currentQuestion + 1)
    setUserAnswers([...userAnswers, isCorrect])
  }
  function handleResetQuiz() {
    setCurrentQuestion(0)
    setUserAnswers([])
  }

  return (
    <div className='quiz'>
      <div className="quizBody flex-v">
        <p className="title">Quiz</p>
        <div className="quizContainer bigContainer flex-v">
          <p className="md-font">Word Quiz</p>
          {currentQuestion < data.length && <Question question={data[currentQuestion]} onAnswerClick={handleNextQuestion} />}
          {currentQuestion === data.length && <Result userAnswers={userAnswers} questions={data} resetQuiz={handleResetQuiz} />}
        </div>
      </div>

    </div>
  )
}

export default Quiz
