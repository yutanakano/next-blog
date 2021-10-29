import React from 'react';
import styles from '../../styles/Home.module.css';

export interface Props {
  blog: { id: string; title: string; body: string; publishedAt: string };
}

export const Article = (props: Props) => {
  // 画面中央に記事がくるようにする
  // はみ出る部分は折り返せるようにしたい
  return (
    <article>
      <h1 className={styles.title}>{props.blog.title}</h1>
      <p className={styles.publishedAt}>{props.blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${props.blog.body}`,
        }}
        className={styles.post}
      />
    </article>
  );
};
