import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Alert, Button, Form } from "react-bootstrap";
import { addProduct } from "../redux/actions/addProductActions";

export default function AddProductPage(props) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const userState = useSelector((state) => state.userState);
  const { userInfo, error } = userState;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("gg", userInfo);
    if (userInfo) {
      dispatch(addProduct(name, category, image, price, brand, description));
      alert("Product successfully added");
      props.history.push("/");
    } else {
      alert("you need to sign in!");
    }
  };

  return (
    <div className="addproduct">
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="formBasicEmail">
          <h1>Add Product:</h1>

          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{ display: "block" }}>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{ display: "block" }}>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="category"
              onChange={(e) => setCategory(e.target.value)}
            />
          </Form.Group>
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            placeholder="image"
            onChange={(e) => setImage(e.target.files[0])}
            style={{ maxWidth: "40%" }}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="price"
            onChange={(e) => setPrice(e.target.value)}
            style={{ maxWidth: "25%" }}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Brand</Form.Label>
          <Form.Control
            type="text"
            placeholder=" brand"
            onChange={(e) => setBrand(e.target.value)}
            style={{ maxWidth: "25%" }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder=" description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
