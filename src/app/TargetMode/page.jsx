'use client';
import FloatingTitle from '@/components/Utilities/FloatingTitle';
import MainTyping from '@/components/Utilities/MainTyping';
import { useState } from 'react';

const Page = () => {
  const [isUseTimer, setIsUseTimer] = useState(true);
  const namePage = 'Target Mode';
  return (
    <div className="h-screen pt-[5.5rem] flex flex-col px-5 gap-4 relative overflow-hidden">
      <FloatingTitle title={namePage} />
      <MainTyping isUseTimer={isUseTimer} TargetMode={true} />
    </div>
  );
};

export default Page;
