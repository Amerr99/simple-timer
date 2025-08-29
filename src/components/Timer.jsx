import React, { useRef, useState, useEffect } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";

const Timer = () => {
  const timerRef = useRef(null);
  const [timer, setTimer] = useState(() => {
    return Number(localStorage.getItem("timer") || 0);
  });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    localStorage.setItem("timer", timer);
  }, [timer]);

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
    localStorage.removeItem("timer");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center">
      <TimerDisplay timer={timer} />
      <TimerControls
        isRunning={isRunning}
        toggleTimer={toggleTimer}
        resetTimer={resetTimer}
      />
    </div>
  );
};

export default Timer;
