export interface Product {
  id: number;
  image: string;
  productName: string;
  price: number;
  ratings: string;
  wished: boolean;
}

export const productData: Product[] = [
  {
    id: 1,
    image: require('../../assets/products/Product1.png'),
    productName: 'Strawberry',
    price: 10,
    ratings: '4.8',
    wished: false,
  },
  {
    id: 2,
    image: require('../../assets/products/Product2.png'),
    productName: 'Fried Chips',
    price: 12,
    ratings: '4.8',
    wished: false,
  },
  {
    id: 3,
    image: require('../../assets/products/Product3.png'),
    productName: 'Mordern Chair',
    price: 3599,
    ratings: '4.8',
    wished: false,
  },
  {
    id: 4,
    image: require('../../assets/products/Product4.png'),
    productName: 'Washing Machine',
    price: 45999,
    ratings: '4.8',
    wished: false,
  },
];
