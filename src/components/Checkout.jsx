import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CheckoutSteps(props) {
  return (
    <Row className="checkout">
      <div className={props.step1 ? "active" : ""}>
        <Link to="/signin">Sign-In</Link>
      </div>
      <div className={props.step2 ? "active" : ""}>
        {" "}
        <Link to="/shipping">Shipping</Link>
      </div>
      <div className={props.step3 ? "active" : ""}>
        {" "}
        <Link to="/payment">Payment</Link>
      </div>
      <div className={props.step4 ? "active" : ""}>
        {" "}
        <Link to="/placeorder">Place Order</Link>
      </div>
    </Row>
  );
}
