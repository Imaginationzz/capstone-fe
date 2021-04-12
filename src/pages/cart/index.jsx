import React, { useEffect } from "react";
import {
  Container,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Grid,
  Typography,
  Paper,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";
import { DeleteForever, Remove } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Cart(props) {
  const [items, setItems] = React.useState([]);
  const productID = props.match.params.id;

  const cartState = useSelector((state) => state.cartState);
  useEffect(() => {
    setItems(cartState.cartItems);
  }, [cartState, setItems]);

  const dispatch = useDispatch();

  const removeFromCartHandler = (id) => {
    // delete action
    dispatch(removeFromCart(id));
  };

  const checkOutHandler = () => {
    props.history.push("/shipping");
  };

  return (
    <Container style={{ marginTop: 100 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          {items.length > 0 ? (
            <List style={{ width: "100%" }}>
              {items.map((item) => (
                <ListItem>
                  <ListItemIcon>
                    <img
                      alt="cart-item"
                      src={item.image}
                      style={{ width: 200, objectFit: "cover" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography style={{ marginLeft: 20 }} variant="h4">
                        {item.name}
                      </Typography>
                    }
                    secondary={
                      <Typography style={{ marginLeft: 20 }}>
                        {`${item.Quantity} in basket - $ ${
                          item.price * item.Quantity
                        }`}
                      </Typography>
                    }
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      onClick={() => removeFromCartHandler(item._id)}
                      size="small"
                    >
                      <DeleteForever fontSize="small" />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          ) : (
            <div
              style={{
                width: "100%",
                height: 400,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography> Your cart is empty</Typography>
              <Button component={Link} to="/">
                Shop Now
              </Button>
            </div>
          )}
        </Grid>
        {items.length > 0 && (
          <Grid item xs={12} md={3}>
            <Paper style={{ width: "100%", height: "100%" }}>
              <List
                subheader={
                  <Typography style={{ padding: 20 }} variant="h5">
                    Cart
                  </Typography>
                }
              >
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography variant="h6">
                        $
                        {items.reduce(
                          (acc, val) => acc + val.price * val.Quantity,
                          0
                        )}
                      </Typography>
                    }
                    secondary={
                      <Typography>
                        Total (
                        {items.reduce((acc, val) => acc + val.Quantity, 0)}{" "}
                        items)
                      </Typography>
                    }
                  ></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText></ListItemText>
                </ListItem>
                <ListItem>
                  <Button
                    component={Link}
                    to="/checkout"
                    fullWidth
                    color="primary"
                    variant="contained"
                  >
                    Checkout
                  </Button>
                </ListItem>
              </List>
            </Paper>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
