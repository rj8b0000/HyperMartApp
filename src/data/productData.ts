export const getProducts = (t: (key: string) => string) => [
  {
    id: 1,
    image: require('../../assets/products/Product1.png'),
    productName: 'Strawberries',
    price: '₹ 10',
    ratings: '4.8',
    whised: false,
  },
  {
    id: 2,
    image: require('../../assets/products/Product2.png'),
    productName: 'Fried Chips',
    price: '₹ 12',
    ratings: '4.8',
    whised: false,
  },
  {
    id: 3,
    image: require('../../assets/products/Product3.png'),
    productName: 'Modern Chair',
    price: '₹ 3599',
    ratings: '4.8',
    wished: false,
  },
  {
    id: 4,
    image: require('../../assets/products/Product4.png'),
    productName: 'LG washing machine',
    price: '₹ 45,999',
    ratings: '4.8',
    wished: false,
  },
];
