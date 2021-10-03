import React from 'react';
import Link from 'next/link';
import { client } from '../libs/client';

interface Article {
  id: string;
  title: string;
  publishedAt: string;
}

interface Contents {
  contents: Article[];
}

export default function Home({
  blog,
}: {
  blog: { id: string; title: string; publishedAt: string }[];
}) {
  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data: Contents = await client.get({ endpoint: 'blog' });

  return {
    props: {
      blog: data.contents,
    },
  };
};
