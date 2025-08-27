import { useState, useEffect, useRef } from "react";

export const useTimer = (initialTime) => {
  const [timer, setTimer] = useState(initialTime);
  const interval = useRef();

  const startTimer = () => {
    setTimer(initialTime);
    interval.current = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
  };

    const clearTimer = () => {
    clearInterval(interval.current);
  };



  return {
    timer,
    startTimer,
    clearTimer
  };
};
