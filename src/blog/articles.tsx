import React from 'react';
import Link from 'next/link';

export interface Props {
  blogs: { id: string; title: string; publishedAt: string }[];
}

export const Articles = (props: Props) => {
  return (
    <ul>
      {props.blogs.map((blog) => (
        <li key={blog.id}>
          <Link href={`/blog/${blog.id}`}>
            <a>{blog.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
