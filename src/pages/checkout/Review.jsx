import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import { keys } from "@material-ui/core/styles/createBreakpoints";

const products = [
  { name: "Product 1", desc: "A nice thing", price: "$9.99" },
  { name: "Product 2", desc: "Another thing", price: "$3.45" },
  { name: "Product 3", desc: "Something else", price: "$6.51" },
  { name: "Product 4", desc: "Best thing of all", price: "$14.11" },
  { name: "Shipping", desc: "", price: "Free" },
];
const addresses = [
  "1 Material-UI Drive",
  "Reactville",
  "Anytown",
  "99999",
  "USA",
];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const [items, setItems] = React.useState([]);

  const shippingState = useSelector((state) => state.shippingState);
  const cartState = useSelector((state) => state.cartState);
  const { creditCard } = useSelector((state) => state.paymentState);
  useEffect(() => {
    setItems(cartState.cartItems);
  }, [cartState, setItems]);

  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      {cartState && shippingState && (
        <>
          {" "}
          <List disablePadding>
            {items.map((product) => (
              <ListItem className={classes.listItem} key={product.name}>
                <ListItemText
                  primary={product.name}
                  secondary={product.description}
                />
                <Typography variant="body2">{`$ ${product.price}`}</Typography>
              </ListItem>
            ))}
            <ListItem className={classes.listItem}>
              <ListItemText primary="Total" />
              <Typography variant="subtitle1" className={classes.total}>
                Total ({items.reduce((acc, val) => acc + val.Quantity, 0)}{" "}
                items)
              </Typography>
            </ListItem>
          </List>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                Shipping
              </Typography>
              <Typography gutterBottom>
                {shippingState.shippingAdress &&
                  shippingState.shippingAdress.fullName.toUpperCase()}
              </Typography>
              <Typography gutterBottom>
                {Object.values(shippingState.shippingAdress).join(", ")}
              </Typography>
            </Grid>
            <Grid item container direction="column" xs={12} sm={6}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                Payment details
              </Typography>
              <Grid container>
                {creditCard &&
                  Object.entries(creditCard).map(([key, value]) => (
                    <React.Fragment key={key}>
                      <Grid item xs={6}>
                        <Typography gutterBottom>
                          {key.toUpperCase()}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography gutterBottom>
                          {key === "cardNumber"
                            ? value
                                .trim() // 1234 1234 1234 1234
                                .split("")
                                .map((char, i) => (i < 12 ? "*" : char))
                                .join("")
                            : value.toUpperCase()}
                        </Typography>
                      </Grid>
                    </React.Fragment>
                  ))}
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </React.Fragment>
  );
}
