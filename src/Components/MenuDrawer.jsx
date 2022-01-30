import React from "react";
import { useState } from "react";
import { Menu } from "@material-ui/icons";
import Drawer from "@mui/material/Drawer";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import { Book } from "@material-ui/icons";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import PersonOutlineIcon from "@material-ui/icons/PeopleAlt";
import WidgetsIcon from "@material-ui/icons/Widgets";
import ContactCalendar from "@material-ui/icons/PermContactCalendar";

const MenuDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Menu
        className="show-on-med-and-down-only"
        onClick={() => setOpenDrawer(true)}
        style={{
          fontSize: 30,
        }}
      />

      <Drawer open={openDrawer} onClose={() => setOpenDrawer(!openDrawer)}>
        <Container className="menudrawer">
          <div on className="displaybox z-depth-3" style={{ marginBottom: 35 }}>
            <div
              style={{
                width: "100%",
                padding: 7,
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Typography>
                <span
                  className="flow-text center"
                  style={{
                    padding: 7,
                  }}
                >
                  New Wave
                </span>
                <Typography className="right">
                  <sub>Admin</sub>
                </Typography>
              </Typography>
            </div>

            <div className="center">
              <span style={{ fontSize: 25, fontWeight: 400 }}>43 </span>
              <span style={{ fontSize: 18, fontWeight: 200 }}>Employees</span>
            </div>
          </div>

          <ul>
            <Link to="/dashboard/board" className="click">
              <li className="links hoverable">
                <WidgetsIcon style={{ fontSize: 36 }} />
                <p>Dashboard</p>
              </li>
            </Link>

            <li className="links">
              <div className="divider"></div>
            </li>
            <h4>Apps</h4>
            <Link to="/apps/calendar">
              <li className="links hoverable">
                <ContactCalendar style={{ fontSize: 36 }} />
                <p>Calendar</p>
              </li>
            </Link>

            <Link to="/apps/utilities">
              <li className="links hoverable">
                {/* <Utilities style={{ fontSize: 36 }} /> */}
                <p>Buy Utilities</p>
              </li>
            </Link>

            <li className="links">
              <div className="divider"></div>
            </li>

            <h4>Management</h4>

            <Link to="/user/staff">
              <li className="links hoverable">
                <PersonOutlineIcon style={{ fontSize: 36 }} />
                <p>Staffs</p>
              </li>
            </Link>

            <li className="links">
              <div className="divider"></div>
            </li>

            <h4>Support</h4>

            <Link to="/dashboard">
              <li className="links hoverable">
                <Book style={{ fontSize: 36 }} />
                <p>Documentation</p>
              </li>
            </Link>

            <Link>
              <li className="links hoverable">
                <ContactSupportIcon style={{ fontSize: 36 }} />
                <p>Help Center</p>
              </li>
            </Link>
          </ul>
        </Container>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
