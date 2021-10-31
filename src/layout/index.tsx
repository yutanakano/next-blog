import React from 'react';
import { Header } from './header';
import { Footer } from './footer';

export const Layout = (props: any) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
