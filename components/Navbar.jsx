import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex text-sd items-center px-10 justify-between mt-10'>
      <Link href="/">
        <span>home</span>
      </Link>
      <Link href="/blog">
        <span>blog 1</span>
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
      <Link href="/blog">
        <span>blog 5</span>
      </Link>
    </div>
  );
};

export default Navbar;
