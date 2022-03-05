import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
        <Tooltip title="Home">
          <Link to="/">
            <div className="dock-item">
              <img src="../home.svg" alt="Home" className="img" />
            </div>
          </Link>
        </Tooltip>

        <Tooltip title="Admin">
          <Link to="/admin">
            <div className="dock-item">
              <img src="../admin.svg" alt="Admin" className="img" />
            </div>
          </Link>
        </Tooltip>

        <Tooltip title="Business Analytics">
          <Link to="/bm-analytics">
            <div className="dock-item">
              <img src="../analytics.svg" alt="Admin" className="img" />
            </div>
          </Link>
        </Tooltip>

        <Tooltip title="Utilities">
          <div className="dock-item">
            <img
              src="../utilities.svg"
              alt="Utilities"
              className="img"
              onClick={() => setOpenUtils(!openUtils)}
            />
          </div>
        </Tooltip>

        <Tooltip title="Settings">
          <div className="dock-item">
            <img
              src="../settings.svg"
              className="img"
              alt="Settings"
              onClick={() => setOpenSettings(!openSettings)}
            />
          </div>
        </Tooltip>

        <Tooltip title="Log Out">
          <div className="dock-item">
            <img
              src="../power-button2.svg"
              className="img"
              alt="Logout"
              onClick={() => dispatch(logout())}
            />
          </div>
        </Tooltip>
        {/* 

        <div className="bar-item">
          <Tooltip title="Notifications">
            <Link to="notifications">
              
                <img
                  src="./notification-svgrepo-com (1).svg"
                  alt=""
                  className="img"
                />
              
            </Link>
          </Tooltip>
        </div>

        <div className="bar-item">
         
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
         
        </div>

        <div className="bar-item">
        
        </div> */}
      </div>

      <Util OpenUtils={openUtils} setOpenUtils={setOpenUtils} />

      <Settings openSettings={openSettings} setOpenSettings={setOpenSettings} />
    </div>
  );
};

export default Dockbar;
