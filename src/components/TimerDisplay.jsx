import React from "react";

function TimerDisplay({ timer }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Timer : {timer}</h2>
    </div>
  );
}

export default TimerDisplay;
