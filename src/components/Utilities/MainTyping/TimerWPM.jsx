import { useContext, useEffect, useState } from 'react';
import { TimerWPMContext, canTypeContext, isUseTimerContext } from '.';

const TimerWPM = () => {
  const timerWPM = useContext(TimerWPMContext);
  const isUseTimer = useContext(isUseTimerContext);
  const canType = useContext(canTypeContext);

  useEffect(() => {
    if (isUseTimer && canType) {
      const inter = setInterval(() => {
        timerWPM((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(inter);
    } else if (!isUseTimer) {
      const inter = setInterval(() => {
        timerWPM((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(inter);
    }
  });
};

export default TimerWPM;
