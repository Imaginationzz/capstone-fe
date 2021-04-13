import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link, useHistory } from "react-router-dom";
import {
  AccountCircleOutlined,
  ExitToAppTwoTone,
  PostAddOutlined,
} from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { USER_SIGNOUT } from "../../redux/constants/userConstants";
import { IconButton } from "@material-ui/core";

export default function UserMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const logOut = () => {
    dispatch({ type: USER_SIGNOUT });
    history.push("/signin2");
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {props.userSignedIn ? (
        <>
          <span style={{ marginLeft: "0.5em" }}>{`Hello ${props.name} `}</span>
          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            color="primary"
          >
            <AccountCircleOutlined />
          </IconButton>
        </>
      ) : (
        <Button
          style={{ marginLeft: "1em" }}
          color="primary"
          variant="outlined"
          component={Link}
          to="/signin2"
        >
          Sign In
        </Button>
      )}

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => history.push("/addproduct2")}>
          <PostAddOutlined color="primary" />
          Add Product
        </MenuItem>

        <MenuItem onClick={logOut}>
          <ExitToAppTwoTone />
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
