import React, { useState } from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { ArrowLeftRounded } from "@material-ui/icons";
import { Link } from "react-router-dom";
import MenuDrawer from "../Components/MenuDrawer";
import Footer from "../Components/Footer";
import { Button, Backdrop, Dialog, DialogContent } from "@mui/material";
import Sidebar from "../Components/Sidebar";
// import { closeLogin, loading ,notLoading } from "../Actions";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [logoutNotifier, setlogoutNotifier] = useState(false);

  // const openLoginModal = useSelector((state) => state.loginModal);

  // console.log(openLoginModal);

  const dispatch = useDispatch();

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

        {/* <div className="notification_status">
          ARE YOU SURE YOU WANT TO END THIS SESSION ? <span>YES</span>
          {"   "} <span>NO</span>
        </div> */}

        <Sidebar />
        

        <div className="displaybox display" id="display">
          

          <div id="top">
            <ArrowLeftRounded />
      <div id="search">
        <input type="search" name="" id="searches" />
      </div>
    </div>
    <section class="body">
      <div class="s">
        <div class="m">
          <div class="f">gng</div>
          <div class="f">klk</div>
        </div>
        <div class="box">
          <div class="percent">
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div class="number">
              <h2>87<span>%</span></h2>
            </div>
          </div>
          <h2 class="text">Progress</h2>
        </div>
      </div>
    </section>
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
      </div>
      <Footer />
    </>
    // </Router>
  );
};

export default Dashboard;
