import React from "react";
import { Drawer } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { darkTheme, lightTheme, aquaTheme } from "../Actions";

const Settings = ({openSettings, setOpenSettings}) => {
  const dark = useSelector((state) => state.themeReducer);
  const dispatch = useDispatch();

  const body = document.getElementsByTagName("body");
  const sidebar = document.getElementById("sidebar");
  const dashDisplay = document.getElementById("display");

  const handleLeftAlign = () => {
    sidebar.removeAttribute("style", "right: 0;");
    // console.log(dashDisplay);
    dashDisplay.setAttribute("style", "margin-left: 100px;");
  };

  const handleRightAlign = () => {
    sidebar.setAttribute("style", "right: 0;");
    dashDisplay.setAttribute("style", "margin-right: 70px;");
  };

  if (dark === 0) {
    body[0].classList.remove("dark");
    body[0].classList.remove("aqua");
    body[0].classList.add("light");
  }

  if (dark === 1) {
    body[0].classList.remove("light");
    body[0].classList.remove("aqua");
    body[0].classList.add("dark");
  }

  if (dark === 2) {
    body[0].classList.remove("light");
    body[0].classList.remove("dark");
    body[0].classList.add("aqua");
  }

  const email = "demo@payroll.com";
  const date = new Date();

  const userSettings = {
    email: email,
    sessionId: 123,
    themePrefrence: dark,
    lastLoginDate: date.toUTCString(),
  };
  
  localStorage.setItem("userSettings", JSON.stringify(userSettings));

  return (
    <div>

      <Drawer
        open={openSettings}
        onClose={() => setOpenSettings(!openSettings)}
        anchor="right"
      >
        <div className="menudrawer" style={{ padding: 15, width: 275 }}>
          <div className="center">
            <h5 className="center">Theme</h5>
            <div className="settings-box">
              <img
                src="./sun-svgrepo-com.svg"
                width="40"
                alt=""
                onClick={() => dispatch(lightTheme())}
              />
              <hr />
              <img
                src="./drops-water-svgrepo-com.svg"
                width="40"
                alt="Dark Mode"
                onClick={() => dispatch(aquaTheme())}
              />
              <hr />
              <img
                src="./moon-svgrepo-com.svg"
                width="40"
                alt="Dark Mode"
                onClick={() => dispatch(darkTheme())}
              />
            </div>
          </div>

          <h5 className="circle">Sidebar Position</h5>

          <div className="settings-box">
            <img
              src="./align-left-svgrepo-com.svg"
              width="40"
              alt=""
              onClick={handleLeftAlign}
            />
            <hr />
            <img
              src="./align-right-svgrepo-com.svg"
              width="40"
              alt=""
              onClick={handleRightAlign}
            />
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Settings;
