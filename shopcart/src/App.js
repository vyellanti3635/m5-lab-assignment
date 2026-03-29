import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import products, { siteName, cartIcon } from "./products";
import { bubbleSort, quickSort, mergeSort } from "./sortAlgorithms";
import Navbar from "./navbar";
import DisplayProducts from "./displayProducts";
import Cart from "./cart";
import SignIn from "./SignIn";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
      sortInfo: {}
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

  handleSort = (key, algorithm) => {
    let sorted;
    let startTime = performance.now();

    if (algorithm === 'bubble') {
      sorted = bubbleSort(this.state.products, key);
    } else if (algorithm === 'quick') {
      sorted = quickSort(this.state.products, key);
    } else if (algorithm === 'merge') {
      sorted = mergeSort(this.state.products, key);
    }

    let endTime = performance.now();
    let timeTaken = (endTime - startTime).toFixed(4);

    console.log(algorithm + " sort by " + key + ": " + timeTaken + " ms");

    this.setState({
      products: sorted,
      sortInfo: {
        algorithm: algorithm,
        key: key,
        time: timeTaken
      }
    });
  };

  render() {
    const { products, sortInfo } = this.state;

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
                  onSort={this.handleSort}
                  sortInfo={sortInfo}
                />
              }
            />
            <Route
              path="/cart"
              element={<Cart products={products} />}
            />
            <Route
              path="/checkout"
              element={<SignIn />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
