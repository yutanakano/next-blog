import { GetStaticProps, GetStaticPaths } from 'next';
import { client } from '../../libs/client';
import { DenseAppBar } from '../../components/atoms/DenseAppBar';
import { Article } from '../../components/atoms/Article';
import { FixedBottomNavigation } from '../../components/atoms/FixedBottomNavigation';

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
    <>
      <DenseAppBar />
      <Article blog={blog} />
      <FixedBottomNavigation />
    </>
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
