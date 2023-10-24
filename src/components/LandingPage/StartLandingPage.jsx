import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

const StartLandingPage = () => {
  return (
    <Link
      href={'/NormalMode'}
      className="flex w-[8rem] p-1 justify-evenly items-center relative group active:text-slate-300">
      <div>
        <h1 className="text-sm font-bold">Get Started</h1>
      </div>
      <ArrowRight
        size={20}
        className="duration-100 group-active:translate-x-2"
      />
    </Link>
  );
};

export default StartLandingPage;
