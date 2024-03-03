import { useState } from 'react';
import './SortingVisualizer.css';

const SortingVisualizer = () => {
  const generateRandomNumbers = () => {
    const length = Math.floor(Math.random() * (1000 - 10 + 1)) + 10;
    const array = Array.from(
      { length },
      () => Math.floor(Math.random() * (1000 - 5 + 1)) + 5
    );

    return array;
  };

  const [randomNumbers, setRandomNumbers] = useState(generateRandomNumbers());

  return (
    <div>
      <h2>Sorting Visualizer</h2>
      <button onClick={() => setRandomNumbers(generateRandomNumbers())}>
        Generate New Numbers
      </button>
      <p>Array Length: {randomNumbers.length}</p>
      <div className='array-container'>
        {randomNumbers.map((number, index) => (
          <div
            className='array-bars'
            key={index}
            style={{ height: `${number}px` }}
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;
