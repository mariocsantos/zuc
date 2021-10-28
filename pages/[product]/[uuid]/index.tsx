import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => (
  <Head>
    <title>Zuc</title>
    <meta name="description" content="Zuc products" />
  </Head>
);

export async function getServerSideProps({ params }: { params: { product: string; uuid: string } }) {
  // cal API to get product
  console.log(params);

  return {
    props: {},
  };
}

export default Home;
