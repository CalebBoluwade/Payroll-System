import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import { Tooltip } from "@mui/material";
import Util from "./Utilities";
import { logout } from "../Actions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Settings from "./Settings";

const Dockbar = () => {
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
    <div className="dock">
      <div className="displaybox" id="dock">
        <div className="bar-item">
          <Tooltip title="Home">
            <Link className="Bbar-links" to="/">
              <img src="./home.svg" alt="home" className="img" />
            </Link>
          </Tooltip>
        </div>

        {/* <div className="bar-item">
          <Tooltip title="Dashboard">
            <Link to="dashboard" className="Bbar-links">
              <img src="./dashboard.svg" alt="" className="img" />
            </Link>
          </Tooltip>
        </div> */}

        <div className="bar-item">
          <Tooltip title="Notifications">
            <Link to="notifications">
              <Badge badgeContent={16}>
                <img
                  src="./notification-svgrepo-com (1).svg"
                  alt=""
                  className="img"
                />
              </Badge>
            </Link>
          </Tooltip>
        </div>

        <div className="bar-item">
          <Tooltip title="Utilities">
            <img
              src="./utilities.svg"
              alt="Utilities"
              className="img  Bbar-links"
              onClick={() => setOpenUtils(!openUtils)}
            />
          </Tooltip>
        </div>

        <div className="bar-item">
          <Tooltip title="Printer">
            <img
              src="printer.svg"
              alt="Printer"
              className="img Bbar-links"
              onClick={() => window.print()}
            />
          </Tooltip>
        </div>

        <div className="bar-item">
          <Tooltip title="Settings">
            <img
              src="./settings.svg"
              className="img  Bbar-links"
              width={35}
              alt="Settings"
              onClick={() => setOpenSettings(!openSettings)}
            />
          </Tooltip>
        </div>

        <div className="bar-item">
          <Tooltip title="Log out">
            <img
              src="./power-button2.svg"
              className="img Bbar-links"
              width={35}
              alt="Logout"
              onClick={() => dispatch(logout())}
            />
          </Tooltip>
        </div>

        <Util OpenUtils={openUtils} setOpenUtils={setOpenUtils} />

        <Settings
          openSettings={openSettings}
          setOpenSettings={setOpenSettings}
        />
      </div>
    </div>
  );
};

export default Dockbar;
