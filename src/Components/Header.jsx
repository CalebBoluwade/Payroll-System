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
import Drawer from "@material-ui/core/Drawer";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/MenuOutlined";
import Logout from "@material-ui/icons/LocalDiningOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Actions";

const Header = () => {
  const isAuth = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();

  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();

  const [openPopup, setOpenPopup] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

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
      <div style={{ display: "flex" }}>
        <div
          className="hide-on-large-only"
          style={{
            border: "1px solid navy",
            borderRadius: 8,
            height: 35,
            padding: 7,
            marginTop: 15,
            marginLeft: 15,
          }}
        >
          <MenuIcon
            onClick={() => setOpenDrawer(true)}
            style={{
              color: "navy",
              fontSize: 34,
              position: "relative",
              bottom: 10,
            }}
          />
        </div>

        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <Container
            style={{
              width: 350,
              height: "100%",
              padding: 15,
              background:
                "linear-gradient(to bottom, #fff, lightskyblue, navy)",
            }}
          >  

          </Container>
        </Drawer>

        <img src="GetriPay-Logo2.png" alt="getri-logo" className="site-logo" />
      </div>

      <ul className="hide-on-med-and-down">
        <li className="links">
          <a href="/">Home</a>
        </li>
        <li className="links">
          <a href="/dashboard">Services</a>
        </li>
        <li className="links">
          <a href="/pricing">Pricing</a>
        </li>
        <li className="links">
          <a href="/dashboard">Contact</a>
        </li>
      </ul>

      <div>
        {isAuth ? (
          <span
            style={{
              display: "flex",
              marginRight: 20,
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
                    width: 40,
                    height: 40,
                    position: "relative",
                    top: 13,
                  }}
                  onClick={() => setOpenMenu(true)}
                />
              </Tooltip>

              <Menu open={openMenu} onClose={() => setOpenMenu(false)}>
                <MenuItem onClick={() => setOpenMenu(false)}>Profile</MenuItem>
                <MenuItem onClick={() => setOpenMenu(false)}>
                  My account
                </MenuItem>
                <MenuItem onClick={() => setOpenMenu(false)}>
                  <Button text="Logout" onClick={() => dispatch(logout())}>
                    <Logout fontSize="small" /> Logout
                  </Button>
                </MenuItem>
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
          </span>
        )}
      </div>

      <Dialog open={openPopup} onClose={() => setOpenPopup(false)}>
        <DialogTitle>
          {openPopup ? (
            <Alert severity="success" id="alertanimation">
              Login Sucess!
            </Alert>
          ) : (
            <Alert severity="error">Try Again</Alert>
          )}
        </DialogTitle>

        <DialogContent>
          <Container component="main" maxWidth="xs">
            <form
              // action="/dashboard"
              method="GET"
              className="form-control"
              style={{ margin: "0px auto" }}
            >
              <Avatar className="center" style={{ margin: "0px auto" }}>
                <LockOutlined />
              </Avatar>
              <Typography className="center" component="h1" variant="h5">
                Sign in
              </Typography>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                placeholder="Email"
                label="Email Address"
                name="email"
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                type="password"
                name="password"
                onChange={(e) => setUserPassword(e.target.value)}
                current-password="auto-complete"
              />

              <FormControlLabel
                control={<Checkbox value="remember" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleSubmit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link variant="body2">Forgot Password?</Link>
                </Grid>

                <Grid item xs>
                  <Link to="/register" variant="body2">
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Container>
        </DialogContent>
      </Dialog>
    </nav>
  );
};
export default Header;
