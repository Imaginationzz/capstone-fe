import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Alert, Button, Form } from "react-bootstrap";
import { signin } from "../redux/actions/userActions";

export default function SigninPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userState = useSelector((state) => state.userState);
  const { userInfo, error } = userState;

  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  // useEffect(() => {
  //   if (userInfo) {
  //     props.history.push(redirect);
  //   }
  // }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));

    if (userInfo) {
      props.history.push("/");
    } else {
      props.history.push("#");
    }
  };

  return (
    <div className="signin">
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="formBasicEmail">
          <h1>Please Sign In:</h1>

          {error && (
            <Alert className="alert">Invalid Email or password:{error}</Alert>
          )}
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

        <Button variant="primary" type="submit">
          Submit
        </Button>
        {"    "}
        <Form.Label>If You Are New Please Register{"    "}</Form.Label>

        <Link to="/register">Create New Account</Link>
      </Form>
    </div>
  );
}
