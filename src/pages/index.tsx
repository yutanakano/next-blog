import React from 'react';
import { client } from '../../libs/client';
import { Header } from '../layout/header';
import { Articles } from '../blog/articles/index';
import { Footer } from '../layout/footer';

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
      <Header />
      <Articles blogs={blogs} />
      <Footer />
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
