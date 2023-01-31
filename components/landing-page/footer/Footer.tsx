import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="font-main">
      <div className="w-[90%] mx-auto py-4">
        <div className="font-bold text-teal-500/50 text-2xl font-main">
          Volume Exchange
        </div>
        <div className="flex md:items-center gap-8 flex-col md:flex-row my-5">
          <div className="flex flex-col justify-between gap-3">
            <h3 className="capitalize text-teal-500 font-bold">company</h3>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-white">
                About Us
              </Link>
              <Link href="/" className="text-white">
                Home
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3">
            <h4 className="capitalize text-teal-500 font-bold">
              Terms & Condition
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/tax" className="text-white">
                Tax
              </Link>
              <Link href="/risk" className="text-white">
                Risk & Warning
              </Link>
            </div>
          </div>
        </div>
        <div className="my-3 text-neutral-400">
          contact us: support@volumeexchange.co
        </div>
        <div className="text-neutral-400">
          Volume exchange©{new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
