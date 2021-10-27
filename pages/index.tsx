import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Zuc</title>
      <meta name="description" content="Zuc products" />
    </Head>
  </div>
);

export async function getStaticProps() {
  // cal API to get products
}

export default Home;
