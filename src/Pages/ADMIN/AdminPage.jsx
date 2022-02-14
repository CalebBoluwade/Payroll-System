import { Menu, WifiOffOutlined, Wifi } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import { logout } from "../../Actions";
import { useDispatch } from "react-redux";
import BackTo from "../../Components/BackTo";
import AdminMenu from "../../Components/AdminMenu";

const AdminPage = () => {
  const [openSideView, setSideView] = useState(false);
  const isUserAuth = useSelector((state) => state.authReducer);
  // const isLoading = useSelector((state) => state.loadingReducer);
  const [connectionStatus, setConnectionStatus] = useState();
  const [showStatus, setShowStatus] = useState();
  const [welcomeBanner, setWelcomeBanner] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setWelcomeBanner(true);
    }, 5000);
    setConnectionStatus(navigator.onLine);
    console.log(navigator);
  }, [navigator]);

  useEffect(() => {
    if (!isUserAuth) {
      navigate("auth");
    }
  }, [isUserAuth]);

  return (
    <>
      <div id="admin-board">
        <div id="admin-nav">
          <div className="admin-topbar">
            <Menu
              onClick={() => setSideView(!openSideView)}
              style={{
                fontSize: 35,
              }}
            />
            <div>
              <img
                src="../power-button-admin.svg"
                width={40}
                alt="Power Button"
                onClick={() => dispatch(logout())}
              />
            </div>
          </div>
          <AdminMenu openSideView={openSideView} setSideView={setSideView} />
        </div>

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

      {/* 
      <div className="welcome-banner">
        <img src="../setting-up.gif" width={300} alt="" />
        <br />
        <br />
        <div className="center">
          <button onClick={() => setWelcomeBanner(false)}>Get Started</button>
        </div>
      </div> */}
    </>
  );
};

export default AdminPage;
