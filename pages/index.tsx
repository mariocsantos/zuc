import React from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.css';
import MarkeplaceApi from '../services/Marketplace';
import CatalogContainer from '../containers/CatalogContainer';
import { Catalog } from '../types/Catalog';

interface HomeProps {
  catalog: Catalog;
}

const Home = ({ catalog }: HomeProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zuc</title>
        <meta name="description" content="Zuc catalog" />
      </Head>
      <CatalogContainer catalog={catalog} />
    </div>
  );
};

export async function getStaticProps() {
  let catalog: Catalog;
  try {
    const { data } = await MarkeplaceApi.get<Catalog>('/api/catalog');
    catalog = data;
  } catch (error) {
    catalog = [];
  }
  return { props: { catalog } };
}

export default Home;
