import React from "react";

const Cart = (props) => {
  const cartItems = props.products.filter((product) => product.quantity > 0);

  return (
    <div className="container mt-3">
      <h4>Your Cart Items</h4>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cartItems.map((product) => (
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
        ))
      )}
    </div>
  );
};

export default Cart;
