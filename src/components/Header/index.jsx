'use client';
import Link from 'next/link';
import Menu from './Menu';
import { useEffect, useState } from 'react';
import { Diamond } from '@phosphor-icons/react/dist/ssr';

function Header() {
  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    return setMenu(!menu);
  };
  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (e.target.getAttribute('id') !== 'menu') {
        setMenu(false);
      }
    });
  }, [menu]);

  return (
    <div className="z-40 fixed w-full flex justify-between items-center px-4 py-3 backdrop-blur-[3px] rounded-b-xl shadow-sm shadow-black/50">
      <Link
        href={'/'}
        className="flex items-center justify-center p-[0.7rem] bg-slate-500/20 backdrop-blur-[3px] rounded-xl active:bg-slate-300/30 active:scale-95 shadow">
        <h1 className="font-bold text-[1.3rem]">Ozy Typing</h1>
      </Link>
      <div
        className="z-50 flex text-md p-2 bg-slate-500/20 backdrop-blur-[3px] rounded-xl active:bg-slate-300/30 w-[6rem] justify-evenly items-center active:scale-95 group shadow"
        onClick={handleClick}
        id="menu">
        <p
          id="menu"
          className={`${menu ? 'text-slate-200' : 'text-slate-100'}`}>
          Mode
        </p>
        <span
          id="menu"
          className={`${
            menu ? 'text-slate-600 rotate-[136deg]' : 'text-slate-100 rotate-0'
          } duration-100  `}>
          <Diamond size={20} />
        </span>
      </div>
      <Menu menu={menu} />
    </div>
  );
}

export default Header;
