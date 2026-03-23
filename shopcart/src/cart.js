import React from "react";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const cartItems = props.products.filter((product) => product.quantity > 0);
  const totalQuantity = props.products
    .map((product) => product.quantity)
    .reduce((total, qty) => total + qty, 0);

  return (
    <div className="container mt-3">
      <h4>Your Cart Items</h4>
      {cartItems.length === 0 ? (
        <div>
          <p>There are {totalQuantity} items in your cart.</p>
          <Link to="/">
            <button className="btn btn-success">Continue Shop</button>
          </Link>
        </div>
      ) : (
        <div>
          {cartItems.map((product) => (
            <div key={product.id} className="border-bottom p-3 d-flex align-items-center">
              <div className="me-4 text-center">
                <img
                  src={product.image}
                  alt={product.desc}
                  className="img-fluid"
                  style={{ maxWidth: "100px" }}
                />
                <div><small>{product.desc}</small></div>
              </div>
              <div>
                <span>Quantity: {product.quantity}</span>
              </div>
            </div>
          ))}
          <Link to="/checkout">
            <button className="btn btn-primary mt-3">Check Out</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
