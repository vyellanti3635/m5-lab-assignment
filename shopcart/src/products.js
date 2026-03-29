import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const products = [
  {
    id: 1,
    image: './products/cologne.jpg',
    desc: 'Unisex Cologne',
    price: 45.99,
    quantity: 0,
    ratings: '4.2'
  },
  {
    id: 2,
    image: './products/iwatch.jpg',
    desc: 'Apple iWatch',
    price: 299.00,
    quantity: 0,
    ratings: '3.5'
  },
  {
    id: 3,
    image: './products/mug.jpg',
    desc: 'Unique Mug',
    price: 12.50,
    quantity: 0,
    ratings: '4.0'
  },
  {
    id: 4,
    image: './products/wallet.jpg',
    desc: 'Mens Wallet',
    price: 34.99,
    quantity: 0,
    ratings: '4.8'
  }
];

export const siteName = "Shop 2 React";
export const cartIcon = faShoppingCart;
export default products;
