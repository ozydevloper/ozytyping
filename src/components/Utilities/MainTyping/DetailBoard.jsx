import { useContext } from 'react';
import { LogicContext } from '.';

const DetailBoard = () => {
  const {
    correctWord,
    setCorrectWord,
    incorrectWord,
    setInCorrectWord,
    wordPerMenit,
    setWordPerMenit,
  } = useContext(LogicContext);

  return (
    <div className="bg-slate-400/20 p-3 backdrop-blur-md rounded-xl border-slate-50/30 shadow-xl border flex flex-col items-center justify-center">
      <div className="bg-slate-300/20 p-2 text-xl rounded-xl border border-slate-50/20">
        Result
      </div>
      <div className="grid grid-cols-1 bg-slate-300/20 p-3 mt-5 rounded-xl border border-slate-50/20 w-[20rem]">
        <div className="flex bg-slate-400/20 p-2 rounded-xl justify-between pr-5">
          <div>WPM</div>
          <div>{wordPerMenit}</div>
        </div>
        <div className="flex bg-slate-400/20 p-2 rounded-xl justify-between pr-5 mt-2">
          <div>Kata Yang Benar</div>
          <div>{correctWord}</div>
        </div>
        <div className="flex bg-slate-400/20 p-2 rounded-xl justify-between pr-5 mt-2">
          <div>Kata Yang Salah</div>
          <div>{incorrectWord}</div>
        </div>
        <div className="flex bg-slate-400/20 p-2 rounded-xl justify-between pr-5 mt-2">
          <div>Jumlah Kata Yang Ketik</div>
          <div>{correctWord + incorrectWord}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailBoard;
