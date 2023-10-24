import Link from 'next/link';

const Menu = ({ menu }) => {
  return (
    <div
      id="menu"
      className={`${
        menu
          ? 'opacity-100 top-[5rem] visible'
          : '-top-[4rem] opacity-0 invisible'
      } z-50 flex absolute rounded-lg flex-col shadow-xl backdrop-blur-[3px] py-4 px-4 end-0 right-4`}>
      <Link
        href={'/NormalMode'}
        className="text-lg m-1 p-2 bg-slate-500/30 backdrop-blur-[3px] rounded-xl active:bg-slate-300/30 active:scale-95 shadow">
        Normal
      </Link>
      <Link
        href={'/TimeMode'}
        className="text-lg m-1 p-2 bg-slate-500/30 backdrop-blur-[3px] rounded-xl active:bg-slate-300/30 active:scale-95 shadow">
        Time
      </Link>
      <Link
        href={'/TargetMode'}
        className="text-lg m-1 p-2 bg-slate-500/30 backdrop-blur-[3px] rounded-xl active:bg-slate-300/30 active:scale-95 shadow">
        Target
      </Link>
      <Link
        href={'/PerHurufMode'}
        className="text-lg m-1 p-2 bg-slate-500/30 backdrop-blur-[3px] rounded-xl active:bg-slate-300/30 active:scale-95 shadow">
        Per Huruf
      </Link>
    </div>
  );
};

export default Menu;
