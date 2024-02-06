import React, { useRef } from 'react';
import './App.css';

function App() {
  const numberOfDivs = 9; // the variable to change the number of divs
  const selectedDivRef = useRef();

  // function to handle when a div is clicked
  const handleDivClick = (index) => {
    if (selectedDivRef.current) {
      selectedDivRef.current.style.height = '100px'; // the height when another div is clicked, the previous div will be set to the initial height
    }
    selectedDivRef.current = document.getElementById(`div-${index}`); // taking the reference of the clicked div
    selectedDivRef.current.style.height = '275px'; // the height of the clicked div
  };

  return (
    <div className='p-2'>
      <div className='bg-[#FEF100] w-full h-[60vh] flex items-end justify-center gap-2'>
        {/* This Array.from method is helping to make multiple divs taking in the number of divs specified above */}
        {Array.from({ length: numberOfDivs }, (_, index) => (
          <div
            key={index}
            id={`div-${index}`}
            className={` w-7 cursor-pointer flex justify-center items-start ${index % 2 === 0 ? 'bg-black text-white' : 'bg-white text-black'} `}
            style={{ height: '100px' }} // This is the initial height of the divs
            onClick={() => handleDivClick(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
