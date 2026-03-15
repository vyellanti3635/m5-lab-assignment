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
      {props.products.map((product) => (
        <div key={product.id} className="border-bottom p-3">
          <h5>{product.desc}</h5>
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
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DisplayProducts;
