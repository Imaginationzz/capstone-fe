import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Add } from "@material-ui/icons";
import Chip from "@material-ui/core/Chip";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  media: {
    height: 300,
  },
});

export default function SingleProduct(props) {
  const classes = useStyles();
  const { product } = props;
  console.log({ product });
  const history = useHistory();
  const dispatch = useDispatch();
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
  const onCardClick = (e) => {
    history.push(`/product/${product._id}`);
  };
  return (
    <Card id={product._id} onClick={onCardClick} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {product.name}
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            <Chip label={product.category} />
            <Typography variant="body2" component="p" style={{ fontSize: 24 }}>
              <strong>{product.price} $</strong>
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          fullWidth
          startIcon={<Add />}
          size="small"
          color="primary"
          onClick={(e) => {
            e.stopPropagation();
            addToCartHandle(product);
          }}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
