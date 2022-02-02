import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import { Tooltip } from "@mui/material";
import Util from "../Components/Utilities";
import { logout } from "../Actions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SettingsIcon from "@material-ui/icons/Settings";
import Settings from "../Components/Settings";

const Sidebar = () => {
  const [openSettings, setOpenSettings] = useState(false);
  const [openUtils, setOpenUtils] = useState(false);
  const isUserAuth = useSelector((state) => state.authReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isUserAuth) {
      navigate("/login");
    }
  }, [isUserAuth]);

  return (
    <div
      className="displaybox z-depth-5 hoverable hide-on-small-only"
      id="sidebar"
    >
      <Tooltip title="Minimize">
        <img
          src="./minimize.svg"
          alt=""
          style={{
            width: 35,
            position: "sticky",
            right: 15,
          }}
        />
      </Tooltip>

      <Tooltip title="Home">
        <Link to="/">
          <img src="./smart-home-svgrepo-com.svg" alt="home" className="img" />
        </Link>
      </Tooltip>

      <Tooltip title="Dashboard">
        <img src="./widget-svgrepo-com.svg" alt="" className="img" />
      </Tooltip>

      <Tooltip title="Search">
        <img src="./search-svgrepo-com.svg" alt="" className="img" />
      </Tooltip>

      <Tooltip title="Notifications">
        <Link to="/notification">
          <Badge badgeContent={16}>
            <img
              src="./notification-svgrepo-com (1).svg"
              alt=""
              className="img"
            />
          </Badge>
        </Link>
      </Tooltip>

      <Tooltip title="Utilities">
        <img
          src="./electricity-flash-svgrepo-com.svg"
          alt=""
          className="img"
          onClick={() => setOpenUtils(!openUtils)}
        />
      </Tooltip>

      <Tooltip title="Printer">
        <img
          src="printer-svgrepo-com.svg"
          alt=""
          className="img"
          onClick={() => window.print()}
        />
      </Tooltip>
      <Tooltip title="Settings">
        <SettingsIcon
          style={{ fontSize: 32, color: "orange" }}
          onClick={() => setOpenSettings(!openSettings)}
        />
      </Tooltip>
      <Tooltip title="Log out">
        {/* <img src="./power-button-power-svgrepo-com.svg" width={65} alt="" />
          <img src="./power-button-svgrepo-com.svg" width={65} alt="" /> */}
        <img
          src="./power-button-svgrepo-com (1).svg"
          width={35}
          alt=""
          onClick={() => dispatch(logout())}
        />
      </Tooltip>

      <Util OpenUtils={openUtils} setOpenUtils={setOpenUtils} />
      
      <Settings openSettings={openSettings} setOpenSettings={setOpenSettings} />
    </div>
  );
};

export default Sidebar;
