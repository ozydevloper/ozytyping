import React from 'react';

const Page = ({ condi, pesan, handleClick }) => {
  return (
    <div
      className={`w-screen top-0 left-0 right-0 bottom-0 h-screen z-30 bg-slate-900/50 backdrop-blur-md ${
        condi ? 'flex' : 'hidden'
      } pt-48 justify-center absolute `}>
      <div className="bg-slate-200/20 border border-slate-50/30 w-[30rem] h-[11rem] flex flex-col justify-center rounded-xl gap-7 overflow-hidden">
        <div className="border border-transparent border-b-slate-200/20 w-full text-center py-2 text-xl">
          Notif
        </div>
        <div className="text-center">{pesan}</div>
        <button
          className="border border-transparent border-t-slate-200/20 w-full text-center py-2 text-xl active:bg-slate-300/50 rounded-b-xl"
          onClick={handleClick}>
          Kembali!
        </button>
      </div>
    </div>
  );
};

export default Page;
