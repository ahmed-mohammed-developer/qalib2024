import "./home.css";
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Home = () => {
  return (
    <div className="home">
      <CssBaseline />
      <Container fixed>
        <Grid container spacing={2} >
          <Grid item xs={12} sm={6} md={4}>
            <h1>محتوى</h1>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <h1>محتوى</h1>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <h1>محتوى</h1>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
