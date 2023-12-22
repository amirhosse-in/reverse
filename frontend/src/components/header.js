import React from 'react';
// Functional Component
const Header = () => {
  return (
    <div
    className="flex flex-row h-[40px] justify-between text-[#9ACC13] bg-[#171717]"
  >
    <div><a className="text-2xl hidden sm:inline" href="/">crackmes.one</ a ></div>
    <div className="flex mt-2 justify-around lg:w-4/12 sm:w-5/12 w-full">
    <a className="text-sm sm:hidden inline font-bold" href="/home">Home</ a >
    <a className="text-sm" href="/search">Search</ a >
    <a className="text-sm" href="/rank">Lastest Crackmes</ a >
    <a className="text-sm" href="/faq">Faq</ a >
    <a className="text-sm" href="/login">Login</ a >
    <a className="text-sm" href="/register">Register</ a >
    </div>
  </div>
  );
};

export default Header;