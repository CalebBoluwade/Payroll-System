import { Menu, ArrowForwardIos } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
// import Sidebar from "../Components/Sidebar";
import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import AdminSidebar from "../Components/Admin-Sidebar";

const AdminPage = () => {
  const [openSideView, setSideView] = useState(false);
  const isUserAuth = useSelector((state) => state.authReducer);
  const isLaading = useSelector((state) => state.loadingReducer);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserAuth) {
      navigate("auth");
    }
  }, [isUserAuth]);

  return (
    <>
      <div className="main" style={{ background: "#fff" }}>
        {/* <Sidebar /> */}
        <div id="admin-board">
          <AdminSidebar openSideView={openSideView} setSideView={setSideView} />

          <div className="admin-main">
            <div className="admin-topbar">
              <Menu
                onClick={() => setSideView(!openSideView)}
                style={{
                  fontSize: 35,
                }}
              />
              <span className="right">
                <input type="search" name="" id="" />
              </span>
            </div>

            <div className="admin-view">
              <Outlet />
             </div>

            {/* </>
            ) : (
              <>
                <div className="center">
                  <CircularProgress />
                  <p>Fetching Employees</p>
                </div>
              </>
            )} */}

          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
