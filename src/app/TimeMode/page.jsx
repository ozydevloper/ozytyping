'use client';
import FloatingTitle from '@/components/Utilities/FloatingTitle';
import MainTyping from '@/components/Utilities/MainTyping';
import { useState } from 'react';

const Page = () => {
  const [isUseTimer, setIsUseTimer] = useState(true);
  const namePage = 'Time Mode';
  return (
    <div className="h-screen pt-[5.5rem] flex flex-col px-5 gap-4">
      <FloatingTitle title={namePage} />
      <MainTyping isUseTimer={isUseTimer} />
    </div>
  );
};

export default Page;
