import React from 'react';
import { Card } from './card';

export interface Props {
  blogs: {
    id: string;
    title: string;
    image: { alt: string; image: { url: string } };
    publishedAt: string;
  }[];
}

export const Articles = (props: Props) => {
  return (
    <div className='max-w-screen-2xl mb-4 px-4 md:px-8 mx-auto'>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8'>
        <Card blogs={props.blogs} />
      </div>
    </div>
  );
};
