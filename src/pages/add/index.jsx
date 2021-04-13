import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/actions/addProductActions";
import { useHistory } from "react-router";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const userState = useSelector((state) => state.userState);
  const { userInfo, error } = userState;

  const dispatch = useDispatch();
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    if (userInfo) {
      dispatch(addProduct(name, category, image, price, brand, description));
      // alert("Product successfully added");
      history.push("/");
    } else {
      history.push("/signin2");
    }
  };
  const fileInput = React.createRef();
  const onFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const preview = document.querySelector("#preview-product");
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      function () {
        preview.src = reader.result;
      },
      false
    );
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <Container style={{ marginTop: 100, marginBottom: 50 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <img
            alt="preview"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src="http://placehold.it/1200"
            onError={(e) => {
              e.target.src = "http://placehold.it/1200";
            }}
            id="preview-product"
          />
          <input onChange={onFileChange} hidden type="file" ref={fileInput} />
        </Grid>
        <Grid item xs={12} md={6}>
          <form onSubmit={submitHandler}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h4">Add Product</Typography>
                <hr />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  label="Name"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  label="Price"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  label="Category"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  label="Brand"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  label="Description"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <Button
                  onClick={() => {
                    fileInput.current.click();
                  }}
                  fullWidth
                  variant="outlined"
                >
                  Add Image
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  type="submit"
                  startIcon={<Add />}
                  variant="contained"
                  color="primary"
                >
                  Add Product
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}
