import React, { useEffect } from "react";
import { Drawer } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { darkTheme, lightTheme, aquaTheme } from "../Actions";

const Settings = ({ openSettings, setOpenSettings }) => {
  const theme = useSelector((state) => state.themeReducer);
  const dispatch = useDispatch();

  const body = document.getElementsByTagName("body");

  if (theme === 0) {
    body[0].classList.remove("dark");
    body[0].classList.remove("aqua");
    body[0].classList.add("light");
  }

  if (theme === 1) {
    body[0].classList.remove("light");
    body[0].classList.remove("aqua");
    body[0].classList.add("dark");
  }

  if (theme === 2) {
    body[0].classList.remove("light");
    body[0].classList.remove("dark");
    body[0].classList.add("aqua");
  }
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
                alt="Aqua Mode"
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

          <input type="date" name="" id="" />
          <input type="date" name="" id="" />
        </div>
      </Drawer>
    </div>
  );
};

export default Settings;
