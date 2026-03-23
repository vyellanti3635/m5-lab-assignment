import React from "react";
import { Card } from "react-bootstrap";

function CheckOut({ fbpic, fbdata }) {
  return (
    <React.Fragment>
      <Card.Header>
        <h1>Check Out</h1>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <img src={fbpic} alt={fbdata.name} />
          <h3 className="d-inline text-success mx-2">
            Welcome Back {fbdata.name}!
          </h3>
          <p className="my-5">Time to check out?</p>
        </Card.Text>
      </Card.Body>
    </React.Fragment>
  );
}

export default CheckOut;
