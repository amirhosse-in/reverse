import React from 'react';

// Functional Component
const Footer = () => {
  return (
    <div
    className="flex flex-row justify-center items-center text-[#ffffff] bg-[#272727]"
  >
    <p className="text-center">
      made with love of RE by &nbsp;
      <a
        className="text-[#9ACC13]"
        href="https://twitter.com/sar5430"
        target="_blank"
        >sar&nbsp;</a
      >
      with the great&nbsp;
      <a
        className="text-[#9ACC13]"
        href="https://github.com/josephspurrier/gowebapp"
        >gowebapp</a
      ><br />design made by the sure guy&nbsp;
      <a
        className="text-[#9ACC13]"
        href="https://twitter.com/mpgn_x64"
        target="_blank"
        >Bonclay&nbsp;</a
      >, inspired by&nbsp;
      <a className="text-[#9ACC13]" href="https://hackthebox.eu" target="_blank"
        >hackthebox.eu</a
      ><br />You can support the cost of crackmes.one infrastructure&nbsp;
      <a className="text-[#9ACC13]" href="https://www.buymeacoffee.com/sar5430"
        >here</a
      >
    </p>
  </div>
  );
};

export default Footer;