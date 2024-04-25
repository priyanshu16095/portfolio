import React from 'react'

function Result({ userAnswers, questions, resetQuiz }) {
    const correctAnswers = userAnswers.filter(answer => answer).length

  return (
    <div className='result flex-v'>
      <p className="md-font">Result</p>
      <p className='key'>You answered {correctAnswers} out of {questions.length} questions.</p>
      <button className='button' onClick={resetQuiz}>Reset Quiz</button>
      <div className="questionsInfo flex-v">
        {questions.map((question, index) => (
            <p key={index} data-correct={userAnswers[index]}>Q{index+1}. {question.question}</p>
        ))}
      </div>
    </div>
  )
}

export default Result
