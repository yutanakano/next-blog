import { GetStaticProps, GetStaticPaths } from 'next';
import { OGP } from '../../blog/ogp';
import { client } from '../../../libs/client';
import { Layout } from '../../layout';
import { Timestamp } from '../../blog/timestamp';

interface Article {
  id: string;
  title: string;
  image: { alt: string; image: { url: string } };
  description: string;
  body: string;
  publishedAt: string;
}

interface Contents {
  contents: Article[];
}

export default function BlogId({
  blog,
}: {
  blog: {
    id: string;
    title: string;
    image: { alt: string; image: { url: string } };
    description: string;
    body: string;
    publishedAt: string;
  };
}) {
  return (
    <Layout>
      <OGP
        title={blog.title}
        description={blog.description}
        keyword={'blog'}
        image={blog.image.image.url}
        url={`https://www.xn--m9jvas3fvb.com/${blog.id}`}
      />
      <main className='max-w-md mx-auto'>
        <article>
          <div className='mb-2 px-2 text-right text-xs'>
            <Timestamp>{blog.publishedAt}</Timestamp>
          </div>
          <h1 className='mb-2 px-2 text-3xl font-bold'>{blog.title}</h1>
          <div
            className='mb-2 px-2 prose'
            dangerouslySetInnerHTML={{
              __html: `${blog.body}`,
            }}
          />
        </article>
      </main>
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
