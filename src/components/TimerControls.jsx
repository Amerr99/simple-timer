import React from "react";

function TimerControls({ toggleTimer, isRunning, resetTimer }) {
  return (
    <div>
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
}

export default TimerControls;
