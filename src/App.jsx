import React, { useRef, useState } from "react";

const App = () => {
  const timerRef = useRef(null);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    } else {
      timerRef.current = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };
  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTimer(0);
    timerRef.current = null;
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Timer : {timer}</h2>
      <button
        onClick={toggleTimer}
        className="mt-3 mr-4 bg-green-500 text-white px-4 py-2 rounded hover: bg-green-600"
      >
        {isRunning ? "Pause" : "Start"}
      </button>
      <button
        onClick={resetTimer}
        className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover: bg-red-600"
      >
        Reset
      </button>
    </div>
  );
};

export default App;
