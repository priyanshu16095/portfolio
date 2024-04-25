import React from 'react'

function Question({ question, onAnswerClick, }) {
  return (
    <div className='question flex-v'>
        <p className='md-font'>{question.question}</p>
        <div className="options">
            {question.options && question.options.length ?
            question.options.map(option => <button className='option button' onClick={() => {onAnswerClick(option.isCorrect)}}>{option.text}</button>)
            : null}
        </div>
    </div>
  )
}

export default Question
