export interface CatalogProduct {
  uuid: string;
  name: string;
  images: string[];
  price: number;
  promotionalPrice: number;
}

export type Catalog = CatalogProduct[];
