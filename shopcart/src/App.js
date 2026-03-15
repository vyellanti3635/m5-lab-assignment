import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css';

const Header = ({ siteName, cartIcon, totalQuantity }) => {
  return (
    <header className="bg-info text-dark p-4">
      <div className="container d-flex justify-content-between align-items-center">
        <h1>{siteName}</h1>
        <div className="text-end">
          <FontAwesomeIcon icon={cartIcon} size="lg" className="me-2" />
          <span>{totalQuantity} items</span>
        </div>
      </div>
    </header>
  );
};

const Product = ({ image, desc, quantity, onQuantityChange }) => {
  return (
    <div className="border-bottom p-4">
      <div className="row align-items-center">
        <div className="col-md-2">
          <img src={image} alt={desc} className="img-fluid" style={{ maxWidth: '150px' }} />
        </div>
        <div className="col-md-4">
          <h4>{desc}</h4>
        </div>
        <div className="col-md-3">
          <input
            type="number"
            min="0"
            value={quantity}
            onChange={(e) => onQuantityChange(parseInt(e.target.value) || 0)}
            className="form-control"
            style={{ width: '100px' }}
          />
          <small className="text-muted">quantity</small>
        </div>
      </div>
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteName: "Shop to React",
      cartIcon: faShoppingCart,
      products: [
        {
          id: 1,
          image: './products/cologne.jpg',
          desc: 'Unisex Cologne',
          quantity: 0
        },
        {
          id: 2,
          image: './products/iwatch.jpg',
          desc: 'Apple iWatch',
          quantity: 0
        },
        {
          id: 3,
          image: './products/mug.jpg',
          desc: 'Unique Mug',
          quantity: 0
        },
        {
          id: 4,
          image: './products/wallet.jpg',
          desc: 'Mens Wallet',
          quantity: 0
        }
      ]
    };
  }

  handleQuantityChange = (productId, newQuantity) => {
    this.setState(prevState => ({
      products: prevState.products.map(product =>
        product.id === productId
          ? { ...product, quantity: newQuantity }
          : product
      )
    }));
  };

  render() {
    const { siteName, cartIcon, products } = this.state;
    
    const totalQuantity = products
      .map(product => product.quantity)
      .reduce((total, quantity) => total + quantity, 0);

    return (
      <div className="App">
        <Header 
          siteName={siteName} 
          cartIcon={cartIcon} 
          totalQuantity={totalQuantity} 
        />
        <div className="container mt-4">
          {products.map(product => (
            <Product
              key={product.id}
              image={product.image}
              desc={product.desc}
              quantity={product.quantity}
              onQuantityChange={(newQuantity) => 
                this.handleQuantityChange(product.id, newQuantity)
              }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
