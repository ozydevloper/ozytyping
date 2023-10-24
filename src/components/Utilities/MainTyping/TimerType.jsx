'use client';

import { MinusCircle, PlusCircle } from '@phosphor-icons/react';
import { useContext, useEffect, useState } from 'react';
import React from 'react';
import TimerButton from './TimerButton';
import { canTypeContext, isUseTimerContext, setCanTypeContext } from '.';

const TimerType = () => {
  const [isClick, setIsClick] = useState(false);
  const [detik, setDetik] = useState(0);
  const [menit, setMenit] = useState(0);
  const setCanType = useContext(setCanTypeContext);
  const isUseTimer = useContext(isUseTimerContext);

  const handleClick = () => {
    if (menit > 0 || detik > 0) {
      setIsClick((prev) => !prev);
      setCanType((prev) => !prev);
    }
  };

  const minMenit = () => {
    if (menit > 0) {
      setMenit((prev) => prev - 1);
    }
  };
  const addMenit = () => {
    if (menit < 60) {
      setMenit((prev) => prev + 1);
    }
  };

  const stopWatch = () => {
    if (menit === 0 && detik === 0) {
      setIsClick((prev) => !prev);
      setCanType((prev) => !prev);
    } else if (detik === 0 && menit !== 0) {
      setMenit((prev) => prev - 1);
      setDetik(59);
    } else {
      setDetik((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (isClick) {
      const inter = setInterval(() => {
        stopWatch();
      }, 1000);
      return () => clearInterval(inter);
    }
  });

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-[1.6rem] flex items-center justify-between w-[11rem] mb-2">
        <button
          className={`${!isUseTimer ? 'brightness-75' : 'group'}`}
          onClick={addMenit}
          disabled={!isUseTimer}>
          <PlusCircle className="group-active:text-slate-500 duration-100" />
        </button>
        <div className={`${!isUseTimer ? 'brightness-75' : 'brightness-100'}`}>
          {menit.toString().padStart(2, '0')}:
          {detik.toString().padStart(2, '0')}
        </div>
        <button
          className={`${!isUseTimer ? 'brightness-75' : 'group'}`}
          onClick={minMenit}
          disabled={!isUseTimer}>
          <MinusCircle className="group-active:text-slate-500 duration-100" />
        </button>
      </div>
      <TimerButton
        handleClick={handleClick}
        isClick={isClick}
        disabled={!isUseTimer}
      />
    </div>
  );
};

export default TimerType;
