import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import NotificationIcon from "@material-ui/icons/Notifications";
import Menu from "@mui/material/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Tooltip from "@material-ui/core/Tooltip";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Actions";
import { ConfirmationNumberOutlined } from "@material-ui/icons";

const Header = () => {
  const isAuth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const [openPopup, setOpenPopup] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);
  const [appsModalDisplay, setAppsModalDisplay] = useState(false);

  return (
    <nav className="navbar">
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
          <Link to="/partners">Partners</Link>
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
          <span>
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
          <>
            <Button onClick={() => setOpenPopup(true)}>Login</Button>

            <Dialog
              open={openPopup}
              onClose={() => setOpenPopup(false)}
            ></Dialog>
          </>
        )}
      </div>
    </nav>
  );
};
export default Header;
