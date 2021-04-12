import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Checkout from "../components/Checkout";
import { Form, Button } from "react-bootstrap";
import { saveShippingAddress } from "../redux/actions/shippingActions";

export default function ShippingPage(props) {
  const [fullName, setFullName] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ fullName, adress, city, postalCode, country })
    );
    props.history.push("/payment");
  };

  return (
    <div>
      <Checkout step1 step2></Checkout>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="formBasicEmail">
          <h1>Please Enter Your Adress:</h1>

          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            value={fullName}
            placeholder="Enter full Name"
            onChange={(e) => setFullName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Adress</Form.Label>
          <Form.Control
            type="text"
            value={adress}
            placeholder="Adress"
            onChange={(e) => setAdress(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            value={city}
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            value={country}
            placeholder="Country"
            onChange={(e) => setCountry(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            value={postalCode}
            placeholder="Postal Code"
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Continue to next step
        </Button>
      </Form>
    </div>
  );
}
