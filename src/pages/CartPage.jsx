import React, { useEffect } from "react";
import { Col, Row, Alert, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

function CartPage(props) {
  const [items, setItems] = React.useState([]);
  const productID = props.match.params.id;
  const Quantity = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
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
    <div>
      <Row className="top">
        <Col className="col-2">
          <h1>Shopping Cart</h1>
          {items.length === 0 ? (
            <Alert className="alert">
              Cart is empty <Link to="/">Buy some Stuff!</Link>
            </Alert>
          ) : (
            <ul>
              {items.map((item) => (
                <li>
                  <Row>
                    <div>
                      <img src={item.image} alt={item.name} className="small" />
                    </div>
                    <div className="">
                      <Link to={`/product/${item._id}`}>{item.name}</Link>
                    </div>
                    <div className="">
                      <select
                        value={item.Quantity}
                        onChange={(e) =>
                          dispatch(addToCart(item._id, Number(e.target.value)))
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((val) => (
                          <option key={val + 1} value={val + 1}>
                            {val + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>${item.price}</div>
                    <div>
                      <Button onClick={() => removeFromCartHandler(item._id)}>
                        Remove
                      </Button>
                    </div>
                  </Row>
                </li>
              ))}
            </ul>
          )}
        </Col>
        <Col className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h1>
                  Total ({items.reduce((acc, val) => acc + val.Quantity, 0)}{" "}
                  items) : $
                  {items.reduce(
                    (acc, val) => acc + val.price * val.Quantity,
                    0
                  )}
                </h1>
              </li>
              <li>
                <Button
                  onClick={checkOutHandler}
                  className="primary"
                  disabled={items.length === 0}
                >
                  Check Out!
                </Button>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default withRouter(CartPage);
