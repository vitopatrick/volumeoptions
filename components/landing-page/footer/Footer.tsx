import React from "react";

const Footer = () => {
  return (
    <footer className="font-main">
      <div className="w-[90%] mx-auto py-4">
        <div className="font-bold text-teal-500/50 text-2xl font-main">
          Volume Exchange
        </div>
        <div className="my-3 text-neutral-200">
          contact us: support@volumeexchange.co
        </div>
        <div className="text-neutral-200">©{new Date().getFullYear()}</div>
      </div>
    </footer>
  );
};

export default Footer;
