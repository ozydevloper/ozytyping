import { ArrowUp, MinusCircle, PlusCircle } from '@phosphor-icons/react';
import React, { useContext, useState } from 'react';
import { countWordContext } from '../Utilities/MainTyping';

const Page = () => {
  const { countWord, setCountWord } = useContext(countWordContext);
  const [show, setShow] = useState(true);

  const addCountWord = () => {
    setCountWord((prev) => prev + 1);
  };
  const minCountWord = () => {
    if (countWord > 0) {
      setCountWord((prev) => prev - 1);
    }
  };
  const setStateShow = () => {
    if (countWord !== 0) {
      setShow((prev) => !prev);
    }
  };

  return (
    <>
      <div
        className={`w-[15rem] z-40 flex flex-col mx-auto left-0 right-0 ${
          show ? 'bottom-[45%] ' : '-bottom-[5.5rem]'
        } items-center justify-center absolute bg-slate-300/20 backdrop-blur-sm border border-slate-50/30 rounded-xl p-3 text-xl`}>
        <span
          className={`w-[6rem] flex items-center justify-center bottom-[5.43rem] h-[3rem] rounded-t-full border border-slate-50/80 bg-slate-300/20 absolute mx-auto z-20 left-0 right-0 backdrop-blur-sm border-b-transparent`}
          onClick={setStateShow}>
          <ArrowUp size={30} />
        </span>
        <div>Setting Jumlah Huruf</div>
        <div className="flex justify-between items-center gap-3 w-36 mt-1">
          <PlusCircle
            size={30}
            onClick={addCountWord}
            className="duration-100 active:scale-95 active:text-slate-400"
          />
          {countWord}
          <MinusCircle
            size={30}
            onClick={minCountWord}
            className="duration-100 active:scale-95 active:text-slate-400"
          />
        </div>
      </div>
    </>
  );
};

export default Page;
