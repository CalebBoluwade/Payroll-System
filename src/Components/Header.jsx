import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import LockOutlined from "@material-ui/icons/LockOutlined";
import Badge from "@material-ui/core/Badge";
import NotificationIcon from "@material-ui/icons/Notifications";
import Menu from "@mui/material/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Tooltip from "@material-ui/core/Tooltip";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Actions";
import { ConfirmationNumberOutlined } from "@material-ui/icons";

const Header = () => {
  const isAuth = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();

  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();

  const [openPopup, setOpenPopup] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);
  const [appsModalDisplay, setAppsModalDisplay] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const sign_in = {
      email: userEmail,
      password: userPassword,
    };

    console.log(sign_in);
  };

  return (
    <nav className="navbar z-depth-5">
      <div>
        <img src="LOGO IDEA 1A.png" alt="brand-logo" className="site-logo" />
      </div>

      <ul className="hide-on-med-and-down">
        <li className="links">
          <span onClick={() => setAppsModalDisplay(!appsModalDisplay)}>
            Apps
          </span>
        </li>
        <li className="links">
          <Link to="pricing">Pricing</Link>
        </li>
        <li className="links">
          <Link to="/dashboard">Partners</Link>
        </li>
        <li className="links">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <Dialog
        open={appsModalDisplay}
        onClose={() => setAppsModalDisplay(false)}
      >
        <DialogTitle>
          <div className="center">Apps</div>
        </DialogTitle>
        <DialogContent>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div className="quickadd" style={{ background: "blue" }}>
              <span>
                <ConfirmationNumberOutlined />
              </span>
            </div>
            <div className="quickadd" style={{ background: "#96d3d3" }}>
              <span>
                <ConfirmationNumberOutlined />
              </span>
            </div>
            <div className="quickadd" style={{ background: "blue" }}>
              <span>
                <ConfirmationNumberOutlined />
              </span>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <div>
        {isAuth ? (
          <span
            style={{
              display: "flex",
              marginRight: 10,
              justifyContent: "space-between",
            }}
          >
            <Tooltip title="Notifications">
              <Link to="/notification">
                <Badge
                  style={{ marginRight: 25 }}
                  badgeContent={2}
                  color="primary"
                >
                  <NotificationIcon />
                </Badge>
              </Link>
            </Tooltip>

            <div>
              <Tooltip title="Account settings">
                <img
                  src="./Thf_1551875131.jpg"
                  className="circle"
                  alt="avatar_img"
                  style={{
                    position: "relative",
                    top: 10,
                  }}
                  onClick={() => setOpenMenu(true)}
                />
              </Tooltip>

              <Menu open={openMenu} onClose={() => setOpenMenu(false)}>
                {/* <MenuItem onClick={() => setOpenMenu(false)}>Profile</MenuItem> */}
                {/* <MenuItem onClick={() => setOpenMenu(false)}>
                  My account
                </MenuItem> */}
                <MenuItem onClick={() => dispatch(logout())}>Logout</MenuItem>
              </Menu>
            </div>
          </span>
        ) : (
          <span style={{ marginRight: 20 }}>
            <Button
              text="Login"
              variant="outlined"
              onClick={() => setOpenPopup(true)}
            >
              Login
            </Button>
            
            <Dialog open={openPopup} onClose={() => setOpenPopup(false)}></Dialog>
          </span>
        )}
      </div>

    
    </nav>
  );
};
export default Header;
