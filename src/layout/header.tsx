import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <div className='bg-white lg:pb-12'>
      <div className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
        <header className='flex justify-between items-center py-4 md:py-8'>
          <Link href='/'>
            <a
              className='inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5'
              aria-label='logo'
            >
              <Image
                src='/icon.png'
                alt='何が起こるかわからない'
                width={95}
                height={94}
              />
              何が起こるかわからない
            </a>
          </Link>
        </header>
      </div>
    </div>
  );
};
