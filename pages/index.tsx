import React from 'react';
import { client } from '../libs/client';
import { Box, Grid } from '@mui/material';
import { DenseAppBar } from '../components/atoms/DenseAppBar';
import { FixedBottomNavigation } from '../components/atoms/FixedBottomNavigation';
import { Articles } from '../components/atoms/Articles';

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
    <>
      <DenseAppBar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={10}>
            <Articles blogs={blogs} />
          </Grid>
          <Grid item xs={12} md={2}>
            <p>術式展開</p>
          </Grid>
        </Grid>
      </Box>
      <FixedBottomNavigation />
    </>
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
