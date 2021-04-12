import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkout from "../components/Checkout";
import { PayPalButton } from "react-paypal-button-v2";
import { Link } from "react-router-dom";
import { createOrder } from "../redux/actions/orderActions";
import { ORDER_CREATE_RESET } from "../redux/constants/orderConstants";
import { RESET_CART } from "../redux/constants/cartConstants";
import axios from "axios";
export default function PlaceorderPage(props) {
  const dispatch = useDispatch();
  const [sdkReady, setSdkReady] = React.useState(false);
  const [totalAmount, setTotalAmount] = React.useState(null);
  const shippingAdress = useSelector(
    (state) => state.shippingState.shippingAdress
  );
  const paymentMethod = useSelector(
    (state) => state.paymentState.paymentMethod
  );
  const cartState = useSelector((state) => state.cartState);
  console.log(shippingAdress);
  console.log(paymentMethod);
  console.log(cartState);
  const { cartItems } = cartState;
  const addPayPalScript = async () => {
    const { data } = await axios.get("http://localhost:5000/order/paypal");
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
    script.async = true;
    script.onload = () => {
      setSdkReady(true);
    };
    document.body.appendChild(script);
  };
  const placeOrderHandler = () => {
    const order = {
      shippingAdress: shippingAdress,
      paymentMethod: paymentMethod,
      orderItems: cartItems,
    };
    dispatch(createOrder(order));
    dispatch({ type: ORDER_CREATE_RESET });
    dispatch({ type: RESET_CART });
    props.history.push("/");
  };
  return (
    <div>
      <Checkout step1 step2 step3 step4 />
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card-order-page card-body">
                <h2>Shipping</h2>
                <p>
                  <strong>Name:</strong>{" "}
                  {shippingAdress && shippingAdress.fullName} <br />
                  <strong>Address: </strong>{" "}
                  {shippingAdress && shippingAdress.adress}-
                  {shippingAdress && shippingAdress.postalCode}-
                  {shippingAdress && shippingAdress.country}
                </p>
              </div>
            </li>
            <li>
              <div className="card-order-page card-body">
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {paymentMethod && paymentMethod}
                </p>
              </div>
            </li>
            <li>
              <div className="card-order-page card-body">
                <h2>Order Items</h2>
                <ul>
                  {cartItems.map((item) => (
                    <li key={item._id}>
                      <div className="row">
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">
                          <Link to={`/product/${item._id}`}>{item.name}</Link>
                        </div>

                        <div>
                          {item.Quantity} x ${item.price} = $
                          {item.Quantity * item.price}
                          {() => setTotalAmount(item.Quantity * item.price)}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <button
                type="button"
                onClick={placeOrderHandler}
                className="primary"
              >
                Pay On Delivery
              </button>
            </li>
            <li style={{ maxWidth: "100px" }}>
              <PayPalButton
                amount={totalAmount}
                onSuccess={addPayPalScript}
              ></PayPalButton>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
