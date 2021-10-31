import React from 'react';
import { client } from '../../libs/client';
import { Layout } from '../layout';
import { Articles } from '../blog/articles/index';

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
  blogs: {
    id: string;
    title: string;
    image: { alt: string; image: { url: string } };
    publishedAt: string;
  }[];
}) {
  return (
    <div>
      <Layout>
        <Articles blogs={blogs} />
      </Layout>
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
