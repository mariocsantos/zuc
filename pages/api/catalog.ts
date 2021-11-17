import type { NextApiRequest, NextApiResponse } from 'next';

import { Catalog } from '../../types/Catalog';

export default function handler(req: NextApiRequest, res: NextApiResponse<Catalog>) {
  res.status(200).json([
    {
      uuid: '1234-5678',
      name: 'Camiseta furia oficial 2021',
      images: [
        'https://furia.fbitsstatic.net/img/p/camiseta-furia-oficial-2021-patrocinadores-preta-70147/256746-4.jpg?w=787&h=1179&v=202109061851&qs=ignore',
        'https://furia.fbitsstatic.net/img/p/camiseta-furia-oficial-2021-patrocinadores-preta-70147/256746-5.jpg?w=787&h=1179&v=202109061851&qs=ignore',
      ],
      price: 259,
      promotionalPrice: 200,
    },
  ]);
}
