import React from 'react';

// Functional Component
const Footer = () => {
  return (
    <div
    className="flex flex-row justify-center items-center text-[#ffffff] bg-[#272727]"
  >
    <p className="text-center">
      made with love of RE by 
      <a
        className="text-[#9ACC13] mx-1"
        href="https://twitter.com/sar5430"
        target="_blank"
        >sar</a
      >
      with the great
      <a
        className="text-[#9ACC13] mx-1"
        href="https://github.com/josephspurrier/gowebapp"
        >gowebapp</a
      ><br />design made by the sure guy
      <a
        className="text-[#9ACC13] mx-1"
        href="https://twitter.com/mpgn_x64"
        target="_blank"
        >Bonclay</a
      >, inspired by
      <a className="text-[#9ACC13] mx-1" href="https://hackthebox.eu" target="_blank"
        >hackthebox.eu</a
      ><br />You can support the cost of crackmes.one infrastructure
      <a className="text-[#9ACC13] mx-1" href="https://www.buymeacoffee.com/sar5430"
        >here</a
      >
    </p>
  </div>
  );
};

export default Footer;