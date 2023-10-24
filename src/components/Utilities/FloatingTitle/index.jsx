'use client';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import React, { useEffect, useRef, useState } from 'react';

const FloatingTitle = ({ title }) => {
  const [show, setShow] = useState(true);
  const wrapRef = useRef();
  const handleClick = () => {
    setShow((prev) => !prev);
  };
  useEffect(() => {
    const offset = wrapRef.current.childNodes[0].offsetWidth + 20;

    if (!show) {
      wrapRef.current.style.left = `-${offset}px`;
    } else {
      wrapRef.current.style.left = `0px`;
    }
  }, [show]);

  return (
    <div
      ref={wrapRef}
      onClick={handleClick}
      className={`left-0 top-36 z-30 absolute shadow-xl border border-transparent backdrop-blur-[5px] active:gap-5 active:border-white active:bg-slate-500/50 py-2 px-3 gap-3 rounded-r-full start-0  items-center flex`}>
      <h1 className="font-bold text-[1.5rem]">{title}</h1>
      <ArrowRight size={25} />
    </div>
  );
};

export default FloatingTitle;
