import { GetStaticProps, GetStaticPaths } from 'next';
import { client } from '../../../libs/client';
import { Layout } from '../../layout';

interface Article {
  id: string;
  title: string;
  body: string;
  publishedAt: string;
}

interface Contents {
  contents: Article[];
}

export default function BlogId({
  blog,
}: {
  blog: { id: string; title: string; publishedAt: string; body: string };
}) {
  return (
    <Layout>
      <h1 className='mb-2 px-2 text-3xl font-bold'>{blog.title}</h1>
      <p className='mb-2 px-2 text-xs text-right'>{blog.publishedAt}</p>
      <div
        className='mb-2 px-2 prose'
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </Layout>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths: GetStaticPaths = async () => {
  const data: Contents = await client.get({ endpoint: 'blog' });

  const paths = data.contents.map((content) => `/blog/${content.id}`);

  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const data = await client.get({ endpoint: 'blog', contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
