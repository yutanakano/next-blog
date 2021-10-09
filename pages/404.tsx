import { Grid } from '@mui/material';
import { DenseAppBar } from '../components/atoms/DenseAppBar';
import { FixedBottomNavigation } from '../components/atoms/FixedBottomNavigation';

export default function Custom404() {
  return (
    <>
      <DenseAppBar />
      <Grid container spacing={2}>
        <Grid item xs={12} md={10}>
          <p>ページがありません。</p>
        </Grid>
        <Grid item xs={12} md={2}>
          <p>術式展開</p>
        </Grid>
      </Grid>
      <FixedBottomNavigation />
    </>
  );
}
