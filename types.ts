
export enum ProductCategory {
  ALL = 'Все',
  BAGS = 'Сумки',
  WALLETS = 'Кошельки',
  CASES = 'Чехлы',
}

export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  category: ProductCategory;
}
