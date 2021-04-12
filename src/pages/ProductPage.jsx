import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { productDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

import Rating from "../components/Rating";
import { Link, withRouter } from "react-router-dom";
import { Spinner, Alert } from "react-bootstrap";

function ProductPage(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [Quantity, setQuantity] = useState(1);
  const productID = props.match.params.id;
  const productDetailState = useSelector((state) => state.productDetailState);
  const { loading, product, error } = productDetailState;

  useEffect(() => {
    dispatch(productDetails(productID));
  }, [dispatch, productID]);

  const addToCartHandle = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      {console.log("ddddd", product)}
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : error ? (
        <Alert className="alert">something wrong has happened:{error}</Alert>
      ) : (
        <div>
          <Link style={{ padding: "2rem", fontWeight: "bold" }} to="/">
            Back to main
          </Link>
          <div style={{ padding: "1rem" }} className="row top">
            <div className="col-2">
              <img className="large" src={product.image} alt={product.name} />
            </div>
            <div
              style={{ padding: "1rem", fontWeight: "bold" }}
              className="col-1"
            >
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  />
                </li>
                <li>Price:{product.price}</li>
                <li>description:{product.description}</li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">${product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success">{`Last ${product.countInStock} left !`}</span>
                        ) : (
                          <span className="error">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Quantity:</div>
                          <div>
                            <select
                              value={Quantity}
                              onChange={(e) => setQuantity(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (val) => (
                                  <option key={val + 1} value={val + 1}>
                                    {val + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          className="primary block"
                          onClick={() => addToCartHandle(product)}
                        >
                          Add to Cart
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default withRouter(ProductPage);
