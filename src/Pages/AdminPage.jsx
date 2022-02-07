import { Menu, WifiOffOutlined, Wifi } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import Dockbar from "../Components/Dockbar";
import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import AdminSidebar from "../Components/Admin-Sidebar";
import { logout } from "../Actions";
import { useDispatch } from "react-redux";
import BackTo from "../Components/BackTo";

const AdminPage = () => {
  const [openSideView, setSideView] = useState(false);
  const isUserAuth = useSelector((state) => state.authReducer);
  const isLoading = useSelector((state) => state.loadingReducer);
  const [connectionStatus, setConnectionStatus] = useState(true);
  const [showStatus, setShowStatus] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Window.addEventListener("onli", () => {});
    // setConnectionStatus(Navigator.onLine);
    console.log(Navigator);
  }, [Navigator.online]);

  useEffect(() => {
    if (!isUserAuth) {
      navigate("auth");
    }
  }, [isUserAuth]);

  return (
    <>
      <div id="admin-board">
        <div className="admin-topbar">
          <Menu
            onClick={() => setSideView(!openSideView)}
            style={{
              fontSize: 35,
            }}
          />
          <div>
            <img
              src="../power-button-power-svgrepo-com.svg"
              width={40}
              alt="Power Button"
              onClick={() => dispatch(logout())}
            />
          </div>
        </div>
        <AdminSidebar openSideView={openSideView} setSideView={setSideView} />

        <div className="admin-view">
          <BackTo />
          <Outlet />
        </div>
      </div>

      <div className={showStatus ? "" : "hide"}>
        {connectionStatus ? (
          <>
            <div className="status online">
              <Wifi /> Connection Available
            </div>
          </>
        ) : (
          <>
            <div className="status offline">
              <WifiOffOutlined /> Connection Offline
            </div>
          </>
        )}
      </div>

      <Dockbar />
    </>
  );
};

export default AdminPage;
