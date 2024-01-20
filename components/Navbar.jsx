import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex text-sd items-center px-10 justify-between mt-10'>
      <Link href="/">
        <span>home</span>
      </Link>
      <Link href="#socials">
        <span>socials</span>
      </Link>
      <Link href="/blog">
        <span>blog 2</span>
      </Link>
      <Link href="/blog">
        <span>blog 3</span>
      </Link>
      <Link href="/blog">
        <span>blog 4</span>
      </Link>
      <Link href="https://drive.google.com/file/d/1Sq9ql5S9yqNJDs36m47M4b1RxxLGdIZL/view?usp=drive_link" target='_blank'>
        <span>resume</span>
      </Link>
    </div>
  );
};

export default Navbar;
