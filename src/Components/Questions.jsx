import React from 'react'

function Questions({question , options , selectedOption , handleSelect}) {
  return (
    <div>
        <div>
        <h3 className='text-3xl pb-5 font-bold'>
            {question}
        </h3>
        </div>
        <div className='flex flex-col gap-x-10 gap-y-10'>
            {options.map((option , index) => (
                <button
                key={index}
                onClick={() => handleSelect(option)}
                className={`p-3 rounded-md text-white ${selectedOption === option
                     ? 'bg-green-500' :  'bg-[#3f3d3d] hover:bg-blue-500 p-3'}`}
                >
                   {option}
                </button>
            ))}
        </div>
    </div>
  )
}

export default Questions