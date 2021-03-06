import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import PostAddIcon from "@material-ui/icons/PostAdd";
import { Button, Container } from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { AccountCircleOutlined } from "@material-ui/icons";
import ChairIcon from "../../images/chair.svg";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Badge from "@material-ui/core/Badge";
import UserMenu from "../usermenu";
import { signout } from "../../redux/actions/userActions";
import { USER_SIGNOUT } from "../../redux/constants/userConstants";
import { useTheme } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    fontWeight: "bold",
    fontSize: 24,
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: "1px solid " + theme.palette.primary.main,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: "1em",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "24ch",
      "&:focus": {
        width: "ch",
      },
    },
  },
}));

export default function Appbar({ setSearchTerm }) {
  const classes = useStyles();
  const cartState = useSelector((state) => state.cartState);
  const { userInfo } = useSelector((state) => state.userState);
  const [items, setItems] = React.useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const totalItems = items.reduce((prev, curr) => prev + curr.Quantity, 0);
  React.useEffect(() => {
    setItems(cartState.cartItems);
  }, [cartState, setItems]);

  const logOut = () => {
    dispatch({ type: USER_SIGNOUT });
    history.push("/signin2");
  };
  const theme = useTheme();
  return (
    <AppBar
      style={{
        paddingTop: theme.spacing(2),
        backgroundColor: "white",
        boxShadow: "none",
        color: theme.palette.primary.main,
        height: 100,
        marginBottom: theme.spacing(20),
      }}
      position="fixed"
    >
      <Container>
        <Toolbar>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
            }}
          >
            <img
              alt="logo"
              src={ChairIcon}
              style={{
                width: 36,
                marginRight: 20,
              }}
            />
            <Typography className={classes.title} variant="h6" noWrap>
              Furniture
            </Typography>
          </Link>
          <Typography
            className={classes.title}
            variant="h6"
            noWrap
          ></Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search???"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <UserMenu
            name={userInfo && userInfo.userName}
            userSignedIn={!!userInfo}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
