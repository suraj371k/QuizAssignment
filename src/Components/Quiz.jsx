import React, { useState } from 'react'
import { questions } from './QuestionBank'
import Questions from './Questions';

function Quiz() {
    const [currentQuestion , setCurrentQuestion] = useState(0);
    const [selectedOption , setSelectedOption] = useState('');
    const [score , setScore] = useState(0);
    
    const handleSelect = (option) => {
        setSelectedOption(option);
    }

    const handleNext = () => {
        if(selectedOption === questions[currentQuestion].answer){
            setScore(score + 1);
        }
        setSelectedOption("")
        setCurrentQuestion(currentQuestion + 1)
    }

    const handleRestart = () => {
        setCurrentQuestion(0);
        setSelectedOption('');
        setScore(0);
      };

  return (
    <div 
    className='max-w-lg mx-auto p-20 bg-white rounded-xl shadow-2xl shadow-white'>
       {currentQuestion < questions.length ? (
        <>
        <Questions 
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        selectedOption={selectedOption}
        handleSelect={handleSelect}
        />
        <button
        onClick={handleNext}
        className="mt-4 px-8 py-2 bg-green-600 text-white rounded-md"
        >Next</button>
        </>
       ):(
        <div className='space-y-6'>
        <h2 className='text-center text-2xl font-bold'>Your Score: {score}/{questions.length}</h2>
        
        <button 
        to='/'
        className='px-8 py-3 rounded-xl bg-black text-white
        '
        onClick={handleRestart}
        >Restart</button>
        </div>
       )}
    </div>
  )
}

export default Quiz