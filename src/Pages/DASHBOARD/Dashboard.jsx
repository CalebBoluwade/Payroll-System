import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { Link, Outlet } from "react-router-dom";
import MenuDrawer from "../../Components/MenuDrawer";
import { Backdrop } from "@mui/material";
import Dockbar from "../../Components/Dockbar";
import { useSelector } from "react-redux";
// import { closeLogin, loading ,notLoading } from "../Actions";
import Alert from "@mui/material/Alert";
import { ArrowUpward } from "@material-ui/icons";
import BackTo from "../../Components/BackTo";
import ChartJs from "./ChartJs";

const Dashboard = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [logoutNotifier, setlogoutNotifier] = useState(false);
  const [show, setShow] = useState(true);

  const dark = useSelector((state) => state.themeReducer);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, []);

  return (
    <>
      <div className="dashboard">
        <div id="topbar" className="z-depth-5 hoverable">
          <div className="left">
            <MenuDrawer />
          </div>
          <div className="right" style={{ display: "flex" }}>
            <Avatar
              className="center"
              onClick={() => setOpenProfile(!openProfile)}
            >
              <img
                src="../Thf_1551875131.jpg"
                className="circle"
                alt="avatar_img"
              />
              <Backdrop
                open={openProfile}
                onClose={() => setOpenProfile(!openProfile)}
              >
                <div
                  className="displaybox z-depth-4"
                  style={{
                    width: "30%",
                    padding: 10,
                    marginBottom: 35,
                  }}
                >
                  <div className="center" style={{ margin: "0px auto" }}>
                    <img
                      src="../Thf_1551875131.jpg"
                      className="brand_image center"
                      alt="avatar_img"
                    />
                  </div>

                  <Typography className="flow-text center">
                    <span
                      style={{
                        padding: 10,
                      }}
                    >
                      New Wave
                    </span>
                  </Typography>
                  <Typography className="center">Admin</Typography>

                  <Link to="/user/profile" className="center">
                    Go To Full Profile
                  </Link>
                </div>
              </Backdrop>
            </Avatar>
          </div>
        </div>

        <div className={show ? "" : "hide"}>
          <Alert>Login Sucessful. Welcome</Alert>
        </div>

        <div className="displaybox">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "15px 0",
            }}
          >
            <BackTo />
            <img src="./dashboard.svg" width={30} alt="" />
            <h2> Dashboard</h2>
          </div>

          <div className="flex-center">
            <div className="display2">
              <h4>Total Salaries Paid</h4>
              <span className="board-numbers">$ 500,000</span>
              <div className="right">
                <ArrowUpward /> 21%
              </div>
            </div>
            <div className="display2">
              <h3>No. of Transactions</h3>
              <span className="board-numbers">43</span>
              <div className="right">
                <ArrowUpward /> 5%
              </div>
            </div>
            <div className="display2 ">
              <h3>Success Rate</h3>
              <span className="board-numbers">100%</span>
              <div className="right">
                <ArrowUpward /> 15%
              </div>
            </div>
          </div>
        </div>

        <div className="displaybox">
          {/* <Outlet /> */}
          <ChartJs />
        </div>
        {/* <Login openPopup={openLoginModal} setOpenPopup={() => dispatch(closeLogin())} /> */}

        {/* <Dialog
              open={logoutNotifier}
              onClose={() => setlogoutNotifier(false)}    
            >
              <DialogContent>
                <div className="dislaybox box">
                  <img src="./warning.svg" width={45} className="center" alt="" />
                  <div style={{alignItems: "center"}}>
                    Due to Inactivity on your current Session, You'll be logged
                    out in 1 Minute.
                  </div>
                </div>
              
                <Button onClick={dispatch(notLoading())}>Close it, I'm Here</Button>
                
              </DialogContent>
            </Dialog>
       */}
        {/* <div className="notification_status">
          ARE YOU SURE YOU WANT TO END THIS SESSION ? <span>YES</span>
          {"   "} <span>NO</span>
        </div> */}
        <Dockbar />
      </div>
    </>
  );
};

export default Dashboard;
