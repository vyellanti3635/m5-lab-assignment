import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import products, { siteName, cartIcon } from "./products";
import Navbar from "./navbar";
import DisplayProducts from "./displayProducts";
import Cart from "./cart";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products
    };
  }

  handleAdd = (productId) => {
    this.setState((prevState) => ({
      products: prevState.products.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    }));
  };

  handleSubtract = (productId) => {
    this.setState((prevState) => ({
      products: prevState.products.map((product) =>
        product.id === productId && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    }));
  };

  render() {
    const { products } = this.state;

    const totalQuantity = products
      .map((product) => product.quantity)
      .reduce((total, qty) => total + qty, 0);

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar
            siteName={siteName}
            cartIcon={cartIcon}
            totalQuantity={totalQuantity}
          />
          <Routes>
            <Route
              path="/"
              element={
                <DisplayProducts
                  products={products}
                  onAdd={this.handleAdd}
                  onSubtract={this.handleSubtract}
                />
              }
            />
            <Route
              path="/cart"
              element={<Cart products={products} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
