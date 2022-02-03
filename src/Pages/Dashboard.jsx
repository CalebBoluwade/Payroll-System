import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { ArrowLeftRounded } from "@material-ui/icons";
import { Link } from "react-router-dom";
import MenuDrawer from "../Components/MenuDrawer";
import Footer from "../Components/Footer";
import { Backdrop } from "@mui/material";
import Sidebar from "../Components/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { darkTheme, lightTheme, aquaTheme } from "../Actions";
// import { closeLogin, loading ,notLoading } from "../Actions";
import Alert from "@mui/material/Alert";

const Dashboard = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [logoutNotifier, setlogoutNotifier] = useState(false);
  const [show, setShow] = useState(true);

  const dark = useSelector((state) => state.themeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
    const user = localStorage.getItem("userSettings");
    //  user && JSON.parse("userSettings");
    // if (user.themePrefrence == 0){
    //   dispatch(lightTheme())
    // }
    // if (user.themePrefrence == 1){
    //   dispatch(darkTheme())
    // }
    // if (user.themePrefrence == 2){
    //   dispatch(aquaTheme())
    // }
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

        {/* <div className="notification_status">
          ARE YOU SURE YOU WANT TO END THIS SESSION ? <span>YES</span>
          {"   "} <span>NO</span>
        </div> */}

        <Sidebar />

        <div className="display" id="display">
          <div id="top">
            <ArrowLeftRounded />
            <div id="search">
              <input type="search" name="" id="searches" />
            </div>
          </div>
          <section className="body">
            <div className="s">
              <div className="m">
                <div className="f">gng</div>
                <div className="f">klk</div>
              </div>
              <div className="box">
                <div className="percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div className="number">
                    <h2>
                      87<span>%</span>
                    </h2>
                  </div>
                </div>
                {/* <h2 className="text">Progress</h2> */}
              </div>
            </div>
          </section>
          <div className="m">
            <div className="f"></div>
          </div>
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
    </>
  );
};

export default Dashboard;
