import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import { Link, Outlet } from "react-router-dom";
import MenuDrawer from "../../Components/MenuDrawer";
import Badge from "@material-ui/core/Badge";
// import { Backdrop } from "@mui/material";
import Dockbar from "../../Components/Dockbar";
import Alert from "@mui/material/Alert";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
// import { darkTheme, lightTheme, aquaTheme } from "../../Actions";

const Dashboard = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [openAssistant, setOpenAssistant] = useState(false);
  const [AssistantProfile, setAssistantProfile] = useState("");
  const [show, setShow] = useState(true);

  const nav = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, []);

  var slideIndex = 0;

  const suggestions = () => {
    var i;
    const suggestSlides = document.getElementsByClassName("suggestions");

    for (i = 0; i < suggestSlides.length; i++) {
      suggestSlides[i].classList = "hide";
    }

    slideIndex++;
    if (slideIndex > suggestSlides.length) {
      slideIndex = 1;
    }
    // suggestSlides[slideIndex - 1].style.display = "flex";

    setTimeout(suggestions, 5000);
  };
  suggestions();

  return (
    <>
      <div className="dashboard" style={{ paddingTop: -5 }}>
        {/* <div id="topbar" className="z-depth-5 hoverable">
          <div className="left">
            <MenuDrawer />
          </div>
          
        </div> */}

        <div className={show ? "" : "hide"}>
          <Alert>Login Sucessful. Welcome</Alert>
        </div>

        <div id="notch">
          <div id="dashboard-menu">
            <MenuDrawer />
          </div>

          <div id="display-notch">
            Wed 16th, Feb
            <img
              src="../Thf_1551875131.jpg"
              className="profile-circle"
              alt="avatar_img"
            />
          </div>
        </div>

        <div id="dashboard-links">
          <ul>
            <div>
              <li className="dashboard-link">
                <Link to="board">Dashboard</Link>
              </li>
              <li className="dashboard-link">
                <Badge color="primary" badgeContent={16}>
                  <Link to="notifications">Notifications</Link>
                </Badge>
              </li>
            </div>

            <div>
              <li className="dashboard-link">
                <Link to="employee">Employees</Link>
              </li>
              <li className="dashboard-link">
                <Link to="profile">Profile</Link>
              </li>
            </div>
          </ul>
        </div>

        {/* <div style={{ marginTop: 10, textAlign: "right" }}>
          <span style={{ fontSize: "1.2em" }}>Hi, GREWS</span>
        </div> */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "15px 0 0 0",
            justifyContent: "space-evenly",
          }}
        >
          <div
            style={{ display: "flex", flexFlow: "column" }}
            onClick={() => setOpenAssistant(!openAssistant)}
          >
            <div id="virtual-assistant">
              Choose your Assistant
              <span>
                {openAssistant ? (
                  <>
                    <KeyboardArrowUp
                      style={{
                        paddingTop: 7,
                        paddingLeft: 15,
                        fontSize: 32,
                      }}
                    />
                  </>
                ) : (
                  <>
                    <KeyboardArrowDown
                      style={{
                        paddingTop: 7,
                        paddingLeft: 15,
                        fontSize: 40,
                      }}
                    />
                  </>
                )}
              </span>
            </div>

            <div id="drop-down" className={openAssistant ? "" : "hide"}>
              <div
                className="assistant-list"
                onClick={() => setAssistantProfile("sam")}
              >
                <img src="./Avatars/2.jpg" width={35} alt="" />
                SAM
              </div>
              <div
                className="assistant-list"
                onClick={() => setAssistantProfile("kate")}
              >
                <img src="./Avatars/1.jpg" width={35} alt="" />
                KATE
              </div>

              <div
                className="assistant-list"
                onClick={() => setAssistantProfile("fletcher")}
              >
                <img src="./Avatars/3.jpg" width={35} alt="" />
                FLETCHER
              </div>
            </div>
          </div>
        </div>

        <div className="displaybox">
          <Outlet />
        </div>

        {/* <div className="theme">
  <img
                src="./sun-svgrepo-com.svg"
                width="15"
                alt=""
                onClick={() => dispatch(lightTheme())}
              />
  </div>
  <div className="theme">
  <img
                src="./moon-svgrepo-com.svg"
                width="15"
                alt="Dark Mode"
                onClick={() => dispatch(darkTheme())}
              />
  </div>
  <div className="theme">
  <img
                src="./drops-water-svgrepo-com.svg"
                width="15"
                alt="Aqua Mode"
                onClick={() => dispatch(aquaTheme())}
              />
  </div> */}

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
        <Avatar />
        <Dockbar />
      </div>
    </>
  );
};

export default Dashboard;
