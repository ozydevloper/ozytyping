import React from 'react';

const TimerButton = ({ handleClick, isClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={`${
        disabled ? 'brightness-75' : 'brightness-100'
      } flex flex-col items-center justify-center gap-1`}
      onClick={handleClick}>
      <span
        className={`${
          isClick ? 'animate-timerAnimColor' : 'animate-none'
        } border w-[60%] border-slate-50`}></span>
      <div
        className={`${
          isClick ? 'animate-timerAnim' : 'animate-none'
        } w-8 h-8 border-2 border-slate-50 rounded-full flex relative `}>
        <span className="h-[50%] origin-bottom  border border-slate-50 absolute start-[50%] top-0"></span>
      </div>
    </button>
  );
};

export default TimerButton;
