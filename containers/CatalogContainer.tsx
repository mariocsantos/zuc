import React from 'react';
import { Catalog } from '../types/Catalog';

interface CatalogContainerProps {
  catalog: Catalog;
}

const CatalogContainer = ({ catalog }: CatalogContainerProps) => {
  return <>{catalog.map(product => product.name)}</>;
};

export default CatalogContainer;
