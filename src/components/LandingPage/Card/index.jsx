import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

const Card = () => {
  return (
    <div className="grid grid-cols-2 gap-x-2 px-2 py-1 absolute bottom-6 md:gap-x-16">
      <Link
        href={'/TimeMode'}
        className=" p-2 rounded-xl border-transparent border active:bg-slate-500/50 active:border-slate-200 group">
        <h1 className="flex text-[1.3rem] font-bold items-center gap-1 mb-1">
          Time <ArrowRight className="group-active:translate-x-4" size={20} />
        </h1>
        <p className="text-light text-[0.8rem] text-slate-300">
          Tentukan waktu semaumu dan lihat berapa kata yang kamu dapat
        </p>
      </Link>
      <Link
        href={'/TargetMode'}
        className=" p-2 rounded-xl border-transparent border active:bg-slate-500/50 active:border-slate-200 group">
        <h1 className="flex text-[1.3rem] font-bold items-center gap-1 mb-1">
          Target <ArrowRight className="group-active:translate-x-4" size={20} />
        </h1>
        <p className="text-light text-[0.8rem] text-slate-300">
          Tentukan berapa kata yang harus di dapat dalam permenit
        </p>
      </Link>
    </div>
  );
};

export default Card;
