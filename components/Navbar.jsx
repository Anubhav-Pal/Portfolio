import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex text-sd items-center justify-between md:justify-end md:gap-3">
      <Link href="/">
        <span>home</span>
      </Link>
      <div className="w-1 mt-1 h-1 rounded-full bg-gray-600 opacity-50"></div>
      <Link href="/crafts">
        <span>crafts✨</span>
      </Link>
      <div className="w-1 mt-1 h-1 rounded-full bg-gray-600 opacity-50"></div>
      <Link href="/#socials">
        <span>contact</span>
      </Link>
      <div className="w-1 mt-1 h-1 rounded-full bg-gray-600 opacity-50"></div>
      <Link
        href="https://drive.google.com/file/d/1Sq9ql5S9yqNJDs36m47M4b1RxxLGdIZL/view?usp=drive_link"
        target="_blank"
      >
        <span>resume</span>
      </Link>
    </div>
  );
};

export default Navbar;
