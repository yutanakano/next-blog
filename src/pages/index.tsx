import React from 'react';
import { client } from '../../libs/client';
import { Articles } from '../blog/articles';

interface Article {
  id: string;
  title: string;
  publishedAt: string;
}

interface Contents {
  contents: Article[];
}

export default function Home({
  blogs,
}: {
  blogs: { id: string; title: string; publishedAt: string }[];
}) {
  return (
    <div>
      <Articles blogs={blogs} />
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data: Contents = await client.get({ endpoint: 'blog' });

  return {
    props: {
      blogs: data.contents,
    },
  };
};
