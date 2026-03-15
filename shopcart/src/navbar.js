import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-dark p-3" style={{ backgroundColor: '#1a7a7a' }}>
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand">
          <h1 className="text-white m-0">
            {props.siteName}
          </h1>
        </Link>
        <Link to="/cart" className="text-white text-decoration-none">
          <FontAwesomeIcon icon={props.cartIcon} size="lg" className="me-2" />
          <span>{props.totalQuantity} items</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
