import React from 'react';
import Link from 'next/link';

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
              <svg
                width='95'
                height='94'
                viewBox='0 0 95 94'
                className='w-6 h-auto text-indigo-500'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M96 0V47L48 94H0V47L48 0H96Z' />
              </svg>
              Flowrift
            </a>
          </Link>
        </header>
      </div>
    </div>
  );
};
