import React, { useRef } from 'react';
import './App.css';

function App() {
  const numberOfDivs = 9; // the variable to change the number of divs
  const selectedDivRef = useRef();

  const handleDivClick = (index) => {
    const clickedDiv = document.getElementById(`div-${index}`);

    // If the clicked div is the same as the currently selected div, reset the height
    if (selectedDivRef.current === clickedDiv) {
      // Toggle between original height and expanded height
      clickedDiv.style.height = clickedDiv.style.height === '300px' ? '100px' : '300px';
    } else {
      // If a different div is clicked, reset the height of the previously selected div
      if (selectedDivRef.current) {
        selectedDivRef.current.style.height = '100px';
      }

      selectedDivRef.current = clickedDiv; // taking the reference of the clicked div
      clickedDiv.style.height = '300px';
    }
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
