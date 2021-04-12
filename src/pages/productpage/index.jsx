import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Add } from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { addToCart } from "../../redux/actions/cartActions";
import { productDetails } from "../../redux/actions/productActions";

export default function ProductPage(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [Quantity, setQuantity] = useState(1);
  const params = useParams();

  const productDetailState = useSelector((state) => state.productDetailState);
  const { loading, product, error } = productDetailState;

  useEffect(() => {
    dispatch(productDetails(params.id));
  }, [params.id]);

  const addToCartHandle = (product) => {
    dispatch(addToCart(product));
  };

  /**
   * 
   * 
   * brand: "test"
    category: "test3"
    countInStock: 2
    createdAt: "2021-03-21T18:07:28.407Z"
    image: "https://res.cloudinary.com/dug7elmpj/image/upload/v1616350047/usedhomefurn/soduxhkt6ims7etmvmyi.jpg"
    name: "sofa"
    numReviews: 3
    price: 140
    updatedAt: "2021-03-21T18:07:28.407Z"
    __v: 0
    _id: "60578b60c00f1c0da6489800"
   */
  return (
    <Container>
      {!loading && (
        <Box style={{ paddingTop: 100 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <img src={product.image} style={{ width: "100%" }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4">{product.name}</Typography>
              <List>
                <ListItem>
                  <Rating value={product.numReviews} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Quantity"
                    secondary={`${product.countInStock} in stock`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary={`${product.price} $`} />
                </ListItem>
                <ListItem>Inc & Dec</ListItem>
                <ListItem>
                  <Button
                    style={{ marginTop: 50 }}
                    variant="contained"
                    color="primary"
                    onClick={() => addToCartHandle(product)}
                    startIcon={<Add />}
                  >
                    Add to cart
                  </Button>
                </ListItem>
                <ListItem>
                  <Typography>{product.description}</Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
}
