import { CssBaseline, Fab } from "@material-ui/core";
import { ShoppingBasketOutlined } from "@material-ui/icons";
import React from "react";
import { Badge } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import io from "socket.io-client";
import Appbar from "./components/appbar";
import Footer from "./components/footer";
import Protected from "./components/protected";
import AddProduct2 from "./pages/add/index";
import AddProductPage from "./pages/AddProductPage";
import Signin2 from "./pages/auth/signin/index";
import Register2 from "./pages/auth/signup/index";
import CartPage from "./pages/cart/index";
import Checkout from "./pages/checkout/index";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/productpage/index";
import RegisterPage from "./pages/RegisterPage";
import SigninPage from "./pages/SigninPage";
import { signout } from "./redux/actions/userActions";

const connOpt = {
  transports: ["websocket", "polling"],
};

let socket = io("http://localhost:5000/", connOpt);

function App() {
  const [showSide, setShowSide] = React.useState(false);

  const [items, setItems] = React.useState([]);
  const cartState = useSelector((state) => state.cartState);

  const totalItems = items.reduce((prev, curr) => prev + curr.Quantity, 0);

  const userInfo = useSelector((state) => state.userState.userInfo);
  //chat state
  const [showModal, setShowModal] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const [connectedUsers, setConnectedUsers] = React.useState([]);

  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
    socket.emit("joinRoom", {
      room: "generalChat",
      username: userInfo.userName,
    });
  };
  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("sendMessage", { room: "generalChat", message });
    setMessage("");
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  React.useEffect(() => {
    socket.on("message", (msg) =>
      setMessages((messages) => messages.concat(msg))
    );
    socket.on("roomData", ({ room, users }) => setConnectedUsers(users));
    socket.on("connect_error");
  }, []);

  React.useEffect(() => {
    setItems(cartState.cartItems);
  }, [cartState, setItems]);

  const signoutHandler = () => {
    dispatch(signout(dispatch));
  };
  const openMenu = () => {
    setShowSide(true);
  };
  const closeMenu = () => {
    setShowSide(false);
  };
  return (
    <>
      <CssBaseline />
      <Router>
        <div className="grid-container">
          {/* <header className="row">

          <div className="sidebarButton">
            <button  onClick={()=>openMenu()}> &#9776;</button>
            <Link className="brand" to="/">UsedHomeFurn</Link>
          </div>
          <div className="search"> 
          <input value={searchTerm}
               onChange={handleSearch} type="text" placeholder="Search.."></input>
          </div>
          <div className="left-menu">
          
            
            <div>
            <ChatModal showModal={showModal} 
            toggleModal={toggleModal}
            connectedUsers={connectedUsers}
            messages={messages}
            sendMessage={sendMessage}
            message={message}
            handleMessage={handleMessage}
            />
            </div>
            <Link className="link-nav" onClick={toggleModal}>Chat</Link>
            <Link className="link-nav" to="/cart">
              Cart
            {items.length > 0 && (
                <span className="Badge"><Badge variant="secondary">{totalItems}</Badge></span>
              )}
            </Link>
            {
              userInfo ? (
                <Dropdown className="dropdwon">
                  <Link to="#">{userInfo.userName}
                    <i className="fa fa-caret-down"></i></Link>
                  <Dropdown.Item className="dropdwon-item" onClick={signoutHandler} href="/signin">Sign Out</Dropdown.Item>
                </Dropdown>
              ) :
                (<Link className="link-nav" to="/signin">Sign In</Link>)
            }
             <Link className="link-nav" to="/addproduct">
              Add Product
            
            </Link>

          </div>

        </header> */}
          {/* <aside onClick={()=>closeMenu()} className={showSide ?"sidebar open":"sidebar"}>
            <h3 onClick={()=>closeMenu()}>Product Categories</h3>
            <button className="sideBarCloseBtn" onClick={()=>closeMenu()}>-</button>
            <ul>
             
            <li><Link className="link" to="#">Beds</Link></li>
            <li><Link className="link" to="#">Tables</Link></li>
            <li><Link className="link" to="#">Chairs</Link></li>
            <li><Link className="link" to="#">Sofas</Link></li>
            
              
            </ul>

          </aside> */}
          <main>
            <Route path="/signin" component={SigninPage} exact />
            <Route path="/signin2" component={Signin2} exact />
            <Route path="/register" component={RegisterPage} exact />
            <Route path="/register2" component={Register2} exact />
            {/* <Route path="/shipping" component={ShippingPage} exact />
            <Route path="/payment" component={[Appbar, PaymentPage]} exact /> */}
            {/* <Route
              path="/placeorder"
              component={[Appbar, PlaceorderPage]}
              exact
            /> */}
            <Route
              path="/checkout"
              render={() => (
                <>
                  <>
                    <Appbar />
                    <Checkout />
                  </>
                </>
              )}
              exact
            />
            <Route path="/addproduct" component={AddProductPage} exact />
            <Route
              path="/addproduct2"
              render={() => (
                <>
                  <Appbar />
                  <AddProduct2 />
                </>
              )}
              exact
            />

            <Route
              path="/"
              exact
              render={() => (
                <>
                  <Appbar setSearchTerm={setSearchTerm} />
                  <HomePage searchTerm={searchTerm} />
                </>
              )}
            />

            <Route
              path="/product/:id"
              render={(props) => (
                <>
                  <Appbar {...props} />
                  <ProductPage {...props} />
                </>
              )}
            />
            <Route
              path="/cart"
              render={(props) => (
                <Protected>
                  <Appbar />
                  <CartPage {...props} />
                </Protected>
              )}
            />
          </main>
          {/* <footer className="row center">UsedHomeFurn-all rights reserved</footer> */}
          <div style={{ position: "fixed", bottom: 50, right: 50 }}>
            <Badge badgeContent={totalItems} color="primary">
              <Fab component={Link} to="/cart" color="primary" aria-label="add">
                <ShoppingBasketOutlined />
              </Fab>
            </Badge>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
