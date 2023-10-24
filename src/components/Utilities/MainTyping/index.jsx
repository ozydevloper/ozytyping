import Logic from '@/components/Utilities/MainTyping/Logic';
import DetailBoard from './DetailBoard';
import TimerType from './TimerType';
import { createContext, useEffect, useState } from 'react';
import TimerWPM from './TimerWPM';
import TargetModeFitur from '@/components/TargetModeFitur';
import Notif from '@/components/Utilities/Notif';
import { useRouter } from 'next/navigation';

export const setCanTypeContext = createContext();
export const canTypeContext = createContext();
export const isUseTimerContext = createContext();

export const LogicContext = createContext();
export const TimerWPMContext = createContext();

export const countWordContext = createContext();

export const NotifContext = createContext();

const Page = ({ isUseTimer, TargetMode, PerHurufMode }) => {
  const [canType, setCanType] = useState(false);
  const [correctWord, setCorrectWord] = useState(0);
  const [incorrectWord, setInCorrectWord] = useState(0);
  const [wordPerMenit, setWordPerMenit] = useState(0);
  const [timerWPM, setTimerWPM] = useState(0);
  const [countWord, setCountWord] = useState(0);
  const [notif, setNotif] = useState(false);
  const [notifText, setNotifText] = useState('');
  const router = useRouter();
  let handleClickNotif = () => {
    router.push('/');
  };

  return (
    <>
      <NotifContext.Provider
        value={{ notif, setNotif, notifText, setNotifText }}>
        <setCanTypeContext.Provider
          value={setCanType}
          className="w-full flex flex-col justify-center items-center overflow-hidden">
          <countWordContext.Provider
            value={{ countWord, setCountWord, TargetMode, PerHurufMode }}>
            {TargetMode ? <TargetModeFitur /> : ''}
            <LogicContext.Provider
              value={{
                correctWord,
                setCorrectWord,
                incorrectWord,
                setInCorrectWord,
                wordPerMenit,
                setWordPerMenit,
                setTimerWPM,
                timerWPM,
              }}>
              <isUseTimerContext.Provider value={isUseTimer}>
                <TimerType />
                <canTypeContext.Provider value={canType}>
                  <Logic />
                  <Notif
                    condi={notif}
                    pesan={notifText}
                    handleClick={handleClickNotif}
                  />
                  <TimerWPMContext.Provider value={setTimerWPM}>
                    <TimerWPM />
                  </TimerWPMContext.Provider>
                </canTypeContext.Provider>
              </isUseTimerContext.Provider>
              <DetailBoard />
            </LogicContext.Provider>
          </countWordContext.Provider>
        </setCanTypeContext.Provider>
      </NotifContext.Provider>
    </>
  );
};

export default Page;
