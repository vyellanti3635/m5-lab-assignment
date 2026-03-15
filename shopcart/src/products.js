import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const products = [
  {
    id: 1,
    image: './products/cologne.jpg',
    desc: 'Unisex Cologne',
    quantity: 0,
    ratings: '4.2'
  },
  {
    id: 2,
    image: './products/iwatch.jpg',
    desc: 'Apple iWatch',
    quantity: 0,
    ratings: '3.5'
  },
  {
    id: 3,
    image: './products/mug.jpg',
    desc: 'Unique Mug',
    quantity: 0,
    ratings: '4.0'
  },
  {
    id: 4,
    image: './products/wallet.jpg',
    desc: 'Mens Wallet',
    quantity: 0,
    ratings: '4.8'
  }
];

export const siteName = "Shop 2 React";
export const cartIcon = faShoppingCart;
export default products;
