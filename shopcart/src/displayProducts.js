import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const DisplayProducts = (props) => {
  const [show, setShow] = useState(false);
  const [showImge, setShowImge] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setShow(true);
    setShowImge(product);
  };

  return (
    <div className="container mt-3">

      {/* sort controls */}
      <div className="mb-3 p-3 bg-light border rounded">
        <strong>Sort by:</strong>

        <div className="mt-2">
          <span className="me-2">Name:</span>
          <button className="btn btn-sm btn-outline-primary me-1"
            onClick={() => props.onSort('desc', 'bubble')}>Bubble</button>
          <button className="btn btn-sm btn-outline-success me-1"
            onClick={() => props.onSort('desc', 'quick')}>Quick</button>
          <button className="btn btn-sm btn-outline-warning me-3"
            onClick={() => props.onSort('desc', 'merge')}>Merge</button>
        </div>

        <div className="mt-2">
          <span className="me-2">Price:</span>
          <button className="btn btn-sm btn-outline-primary me-1"
            onClick={() => props.onSort('price', 'bubble')}>Bubble</button>
          <button className="btn btn-sm btn-outline-success me-1"
            onClick={() => props.onSort('price', 'quick')}>Quick</button>
          <button className="btn btn-sm btn-outline-warning me-3"
            onClick={() => props.onSort('price', 'merge')}>Merge</button>
        </div>

        <div className="mt-2">
          <span className="me-2">Rating:</span>
          <button className="btn btn-sm btn-outline-primary me-1"
            onClick={() => props.onSort('ratings', 'bubble')}>Bubble</button>
          <button className="btn btn-sm btn-outline-success me-1"
            onClick={() => props.onSort('ratings', 'quick')}>Quick</button>
          <button className="btn btn-sm btn-outline-warning me-3"
            onClick={() => props.onSort('ratings', 'merge')}>Merge</button>
        </div>

        {/* show timing results */}
        {props.sortInfo && props.sortInfo.algorithm && (
          <div className="mt-3 p-2 border rounded bg-white">
            <p className="mb-1">
              <strong>Algorithm:</strong> {props.sortInfo.algorithm} |
              <strong> Sorted by:</strong> {props.sortInfo.key} |
              <strong> Time:</strong> {props.sortInfo.time} ms
            </p>
            <small className="text-muted">
              Big O — Bubble: O(n²) | Quick: O(n log n) avg | Merge: O(n log n)
            </small>
          </div>
        )}
      </div>

      {props.products.map((product) => (
        <div key={product.id} className="border-bottom p-3">
          <h5>{product.desc} <small className="text-muted">${product.price}</small></h5>
          <div className="d-flex align-items-center">
            <img
              src={product.image}
              alt={product.desc}
              className="img-fluid me-4"
              style={{ maxWidth: "120px", cursor: "pointer" }}
              onClick={() => handleShow(product)}
            />
            <div className="d-flex align-items-center">
              <FontAwesomeIcon
                icon={faPlusCircle}
                className="me-2"
                style={{ cursor: "pointer", fontSize: "1.5rem" }}
                onClick={() => props.onAdd(product.id)}
              />
              <FontAwesomeIcon
                icon={faMinusCircle}
                className="me-2"
                style={{ cursor: "pointer", fontSize: "1.5rem" }}
                onClick={() => props.onSubtract(product.id)}
              />
              <div>
                <small className="text-muted">Quantity</small>
                <div>{product.quantity}</div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{showImge.desc}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={showImge.image}
            width="350"
            alt={showImge.desc}
            className="mx-5"
          />
          <p><span className="text-dark">Ratings:</span> {showImge.ratings}/5</p>
          <p><span className="text-dark">Price:</span> ${showImge.price}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DisplayProducts;
