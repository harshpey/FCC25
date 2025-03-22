import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });

  const [isRunning, setRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning){
      timerRef.current = setTimeout(() => {
        setTime((prevTime) => {
          const newSecond = prevTime.second + 1;
          const newMinute = prevTime.minute + Math.floor(newSecond / 60);
          const newHour = prevTime.hour + Math.floor(newMinute / 60);

          return {
            hour: newHour % 24,
            minute: newMinute % 60,
            second: newSecond % 60,
          };
        });
      }, 1000);
    }
  },[time, isRunning]);

  function startTimer() {
    clearTimeout(timerRef.current);
    setRunning(true);
  }

  function resetTimer() {
    clearTimeout(timerRef.current)
    setRunning(false)
    setTime({
      hour: 0,
      minute: 0,
      second: 0,
    });
  }
  return (
    <>
      {time.hour}:{time.minute}:{time.second}
      <div className="timer">
        <button onClick={() => startTimer()}>Start</button>
        <button onClick={() => clearTimeout(timerRef.current)}>Pause</button>
        <button onClick={() => resetTimer()}>Reset</button>
      </div>
    </>
  );
};

export default Timer;
