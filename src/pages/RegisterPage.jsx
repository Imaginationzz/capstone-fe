import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Alert, Button, Form } from "react-bootstrap";
import { register } from "../redux/actions/userActions";

export default function RegisterPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [userName, setUserName] = useState("");
  const userState = useSelector((state) => state.userState);
  const { userInfo, error } = userState;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match!");
    } else {
      dispatch(register(firstName, userName, email, password));
      console.log("sss", userInfo);

      if (userInfo) {
        props.history.push("/");
      } else {
        props.history.push("#");
      }
    }
  };
  console.log({ error });

  // 1- Create a resEt_ERRORS action on Mount of App.js
  return (
    <div className="register">
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="formBasicEmail">
          <h1>Register Here:</h1>

          {error && (
            <Alert className="alert">Invalid Email or password:{error}</Alert>
          )}
          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{ display: "block" }}>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="firstName"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{ display: "block" }}>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="userName"
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder=" Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        {"    "}
        <Form.Label>Already have an account?{"  "}</Form.Label>

        <Link to="/signin">SignIn</Link>
      </Form>
    </div>
  );
}
