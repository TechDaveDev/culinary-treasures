"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const IconMenu = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);
const IconClose = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);
const Logo = () => (
  <Link href="/" className="text-2xl font-bold text-orange-600 hover:text-gray-800 transition-colors">
    TC 🥖
  </Link>
)

export default function Header() {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenu = () => {
    setMenuIsActive(!menuIsActive);
  };
  const closeMenu = () => {
    setMenuIsActive(false);
  };

  const getLinkHref = (sectionId: string) => {
    return isHomePage ? `#${sectionId}` : `/#${sectionId}`;
  };

  useEffect(() => {
    if (menuIsActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuIsActive]);


  return (
    <>
      <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out px-4 ${isScrolled ? 'pt-4' : 'pt-6'}`}>
        <div className={`container mx-auto flex justify-between items-center rounded-xl px-4 py-2 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-gray-100/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
          <div className={`${isScrolled ? '' : 'text-white'}`}>
            <Logo />
          </div>

          {/* desktop */}
          <nav className="hidden md:flex gap-6 items-center">
            <Link href="/" className={`font-medium transition-colors ${isScrolled ? 'text-orange-900 hover:text-orange-600' : 'text-white hover:text-orange-200'}`}>Inicio</Link>
            <a href={getLinkHref('recetas-populares')} className={`font-medium transition-colors ${isScrolled ? 'text-orange-900 hover:text-orange-600' : 'text-white hover:text-orange-200'}`}>Recetas Populares</a>
            <a href={getLinkHref('sobre-el-proyecto')} className={`font-medium transition-colors ${isScrolled ? 'text-orange-900 hover:text-orange-600' : 'text-white hover:text-orange-200'}`}>Sobre el Proyecto</a>
            <Link href="/recetas" className={`font-medium transition-colors ${isScrolled ? 'text-orange-900 hover:text-orange-600' : 'text-white hover:text-orange-200'}`}>Recetas</Link>
          </nav>

          {/* mobile */}
          <button
            onClick={handleMenu}
            className={`md:hidden p-2 rounded-md transition-colors z-50 ${!isHomePage ? 'text-orange-900 hover:bg-orange-100' : (isScrolled ? 'text-orange-900 hover:bg-orange-100' : 'text-white hover:bg-white/20')}`}
            aria-label="Abrir menú"
          >
            {menuIsActive ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </header>


      {/* mobile menu */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ease-in-out ${menuIsActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      />

      <div className={`fixed top-0 right-0 h-full w-full max-w-xs bg-orange-50 z-50 shadow-xl transition-transform duration-300 ease-in-out ${menuIsActive ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-start justify-center h-full gap-6 p-8">
          <Link href="/" onClick={closeMenu} className="text-3xl font-bold text-orange-900 hover:text-orange-600">Inicio</Link>
          <a href={getLinkHref('recetas-populares')} onClick={closeMenu} className="text-3xl font-bold text-orange-900 hover:text-orange-600">Recetas Populares</a>
          <a href={getLinkHref('sobre-el-proyecto')} onClick={closeMenu} className="text-3xl font-bold text-orange-900 hover:text-orange-600">Sobre el Proyecto</a>
          <Link href="/recetas" onClick={closeMenu} className="text-3xl font-bold text-orange-900 hover:text-orange-600">Recetas</Link>
        </nav>
      </div>
    </>
  );
}