import React from 'react';
import { OGP } from '../blog/ogp';
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
        <main className='min-h-screen'>
          <OGP
            title={'yutanakano'}
            description={'怠惰です'}
            keyword={'blog'}
            image={'https://www.yutanakano.jp/icon.png'}
            url={'https://www.yutanakano.jp/'}
          />
          <Articles blogs={blogs} />
        </main>
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
