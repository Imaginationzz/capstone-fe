import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Checkout from "../components/Checkout";
import { Form, Button } from "react-bootstrap";
import { savePaymentMethod } from "../redux/actions/paymentActions";

export default function PaymentPage(props) {
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("Stripe");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push("/placeorder");
  };
  return (
    <div>
      <Checkout step1 step2 step3 />
      <Form onSubmit={submitHandler}>
        <fieldset className="payment-field">
          <Form.Group controlId="formBasicEmail">
            <h1>Payment:</h1>

            <Form.Check
              inline
              label="PayPal"
              name="formHorizontalRadios"
              type="radio"
              value="PayPal"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <Form.Check
              inline
              label="Stripe"
              name="formHorizontalRadios"
              type="radio"
              value="Stripe"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </Form.Group>
        </fieldset>
        <Button variant="primary" type="submit">
          Continue to next step
        </Button>
      </Form>
    </div>
  );
}
