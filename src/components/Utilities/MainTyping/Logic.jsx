'use client';
import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  LogicContext,
  NotifContext,
  canTypeContext,
  countWordContext,
  isUseTimerContext,
  setCanTypeContext,
} from '.';

const Page = () => {
  const [isInput, setIsInput] = useState('');
  const [index, setIndex] = useState(0);
  const [valid, setValid] = useState(true);
  const [paddingWords, setPaddingWords] = useState(0);
  const inputRef = useRef();
  const CopyRef = useRef();
  const WordRef = useRef();
  const gap = 20;
  const canType = useContext(canTypeContext);
  const setCanType = useContext(setCanTypeContext);
  const isUseTimer = useContext(isUseTimerContext);

  const [word, setWord] = useState(0);

  const {
    correctWord,
    setCorrectWord,
    incorrectWord,
    setInCorrectWord,
    wordPerMenit,
    setWordPerMenit,
    setTimerWPM,
    timerWPM,
  } = useContext(LogicContext);

  const { countWord, setCountWord, TargetMode, PerHurufMode } =
    useContext(countWordContext);
  const { notif, setNotif, notifText, setNotifText } = useContext(NotifContext);

  //TARGET MODE
  useEffect(() => {
    if (timerWPM === 59 && TargetMode) {
      if (word <= countWord) {
        setCanType(false);
        setNotifText(`Total Kata Yang Anda ketik dalam satu menit : ${word}`);
        setNotif(true);
      }
    }
  }, [timerWPM]);

  //WPS CODE
  const addWord = () => {
    setWord((prev) => prev + 1);
  };
  const resetWord = () => {
    setWord(0);
  };

  useEffect(() => {
    if (timerWPM === 59) {
      setWordPerMenit(word);
      resetWord(0);
      setTimerWPM(0);
    }
  });

  //ADD CORRECT WORD
  const addCorrectWord = () => {
    setCorrectWord((prev) => prev + 1);
  };
  //ADD INCORRECT WORD
  const addInCorrectWord = () => {
    setInCorrectWord((prev) => prev + 1);
  };

  const handleState = (str) => {
    setIsInput(str);
  };
  const handleStateValid = (value) => {
    setValid(value);
  };
  const placeholderFunc = () => {
    if (!isUseTimer) {
      return 'ketik disini...';
    } else if (isUseTimer && !canType) {
      return 'atur menit dan start...';
    } else {
      return 'ketik disini...';
    }
  };

  const perhurufwords =
    'o r q d g h k w z x v n p l q a s f r y n g d r q w d e f r g t h y u i t w f h p l a z x q w e t u b f c v m k l j h y e q a z x d f h o p k h g f d e r a x c v g f d w j k l o p i u y v c x'.split(
      ' '
    );
  const normalwords =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit Esse doloremque ea velit consequuntur officia iusto itaque culpa Sapiente ipsum optio ut perferendis obcaecati repellat rerum minus omnis nobis sunt cum'.split(
      ' '
    );
  const words = PerHurufMode ? perhurufwords : normalwords;

  const handleOnKeyDown = (e) => {
    if (inputRef.current.value === '' && e.keyCode === 32) {
      e.preventDefault();
    } else if (inputRef.current.value !== '') {
      if (e.key === 'Enter' || e.keyCode === 32) {
        WordRef.current.childNodes[index].classList.remove('text-slate-300');
        e.preventDefault();
        if (
          valid &&
          inputRef.current.value.split('').length ===
            WordRef.current.childNodes[index].innerHTML.split('').length
        ) {
          addWord();
          addCorrectWord();
          WordRef.current.childNodes[index].classList.add('text-slate-500');
        } else {
          addInCorrectWord();
          WordRef.current.childNodes[index].classList.add('text-red-800');
        }
        inputRef.current.value = '';
        setIndex((prev) => prev + 1);
        setPaddingWords(
          (prev) => prev + WordRef.current.childNodes[index].offsetWidth + gap
        );

        handleStateValid(true);
      }
    }
  };

  const appendWords = () => {
    const word = words.map((e) => {
      const elementNode = document.createElement('div');
      const textNode = document.createTextNode(e);
      elementNode.appendChild(textNode);
      WordRef.current.appendChild(elementNode);
    });
    return word;
  };

  useEffect(() => {
    if (index === WordRef.current.childElementCount / 1.5) {
      appendWords();
    }
    WordRef.current.style.marginLeft = `calc(50% - ${paddingWords}px)`;
    inputRef.current.style.paddingLeft = 'calc(50% - 0px)';
    WordRef.current.childNodes[index].classList.add('text-slate-300');
    WordRef.current.childNodes[index].classList.add('text-slate-300');
  }, [index]);

  useEffect(() => {
    if (inputRef.current.value === '') {
      handleStateValid(true);
    }
    CopyRef.current.innerHTML = isInput;
    if (valid) {
      inputRef.current.style.paddingLeft = `calc(50% - ${CopyRef.current.offsetWidth}px)`;
      WordRef.current.style.marginLeft = `calc(50% - ${
        paddingWords + CopyRef.current.offsetWidth
      }px)`;
    }

    const InputArr = inputRef.current.value.split('');
    const WordsArr = WordRef.current.childNodes[index].innerHTML.split('');
    for (let i = 0; i < InputArr.length; i++) {
      if (InputArr[i] !== WordsArr[i]) {
        handleStateValid(false);
        return;
      } else {
        handleStateValid(true);
      }
    }
  }, [isInput]);

  useEffect(() => {
    if (valid) {
      inputRef.current.classList.remove('text-red-700');
      inputRef.current.classList.add('text-slate-400');
    } else {
      inputRef.current.classList.add('text-red-700');
      inputRef.current.classList.remove('text-slate-400');
    }
  }, [valid]);

  return (
    <div className="z-10 w-full relative p-4 overflow-hidden bg-slate-400/20 backdrop-blur-md rounded-xl shadow-xl border border-slate-50/30">
      <div className="-left-[100%] invisible absolute" ref={CopyRef}></div>
      <div
        className={`flex gap-[20px] ml-[calc(50%-0px)] duration-150 text-[1.8rem] text-slate-50`}
        ref={WordRef}>
        {words.map((a, i) => (
          <div key={i}>{a}</div>
        ))}
      </div>
      <input
        type="text"
        id="inputText"
        disabled={!isUseTimer ? false : !canType}
        className="z-30 border-transparent outline-none disabled:  pl-[calc(50%)] w-full duration-150 text-[1.8rem] bg-transparent focus:placeholder:opacity-0"
        ref={inputRef}
        onInput={() => handleState(inputRef?.current.value)}
        onKeyDown={handleOnKeyDown}
        placeholder={placeholderFunc()}
        autoCapitalize="false"
        autoComplete="false"
        autoCorrect="false"
        autoSave="false"
      />
    </div>
  );
};
export default Page;
