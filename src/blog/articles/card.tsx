import React from 'react';
import Link from 'next/link';
import { Timestamp } from '../timestamp';

export interface Props {
  blogs: {
    id: string;
    title: string;
    image: { alt: string; image: { url: string } };
    publishedAt: string;
  }[];
}

export const Card = (props: Props) => {
  return (
    <>
      {props.blogs.map((blog) => (
        <Link key={blog.id} href={`/blog/${blog.id}`}>
          <a className='group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative'>
            <img
              src={blog.image.image.url}
              loading='lazy'
              alt={blog.image.alt}
              className='w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200'
            />

            <div className='bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none'></div>

            <div className='relative p-4 mt-auto'>
              <span className='block text-gray-200 text-sm'>
                <Timestamp>{blog.publishedAt}</Timestamp>
              </span>
              <h2 className='text-white text-xl font-semibold transition duration-100 mb-2'>
                {blog.title}
              </h2>

              <span className='text-indigo-300 font-semibold'>Read more</span>
            </div>
          </a>
        </Link>
      ))}
    </>
  );
};
