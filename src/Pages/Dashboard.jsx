import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import PersonOutlineIcon from "@material-ui/icons/PeopleAlt";
import WidgetsIcon from "@material-ui/icons/Widgets";
import Settings from "@material-ui/icons/Settings";
import Close from "@material-ui/icons/Close";
import Profile from "./Profile";
import Badge from "@material-ui/core/Badge";
import NotificationIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import ContactCalendar from "@material-ui/icons/PermContactCalendar";
import SearchIcon from "@material-ui/icons/Search";
// import FormControlLabel from "@material-ui/core/Form";
import Container from "@material-ui/core/Container";
import Board from "./Board";
import Calendar from "./Calendar";
import Staff from "./Staff";
import Utilities from "./utilities";
import { TextField } from "@material-ui/core";
import { Book } from "@material-ui/icons";
import ContactSupport from "../Components/ContactSupport";
import MenuDrawer from "../Components/MenuDrawer";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <>

      {loading ? (
          <>
            <div className="preloader">
              <span className="right" onClick={() => setLoading(false)}>
                <Close style={{ fontSize: 28 }} />
              </span>

              <img src="../logo-javascript.png" alt="fds" className="loader" width="50"/>

            </div>
          </>
        ) : ""}

          <div className="dashboard z-depth-1">
            <div className="hide-on-med-and-down" style={{ width: "20%" }}>
              <Container>
                <TextField
                  label="Search here"
                  InputProps={{ type: "search" }}
                />
                <SearchIcon style={{ position: "relative", right: 40 }} />
              </Container>

              <div
                on
                className="displaybox z-depth-3"
                style={{ marginBottom: 35 }}
              >
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
                  <span style={{ fontSize: 18, fontWeight: 200 }}>
                    Employees
                  </span>
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
                    <ContactCalendar style={{ fontSize: 30 }} />
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
                    <ContactSupportIcon style={{ fontSize: 30 }} />
                    <p>Help Center</p>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="board">
              <div>
              <div className="left">
                <MenuDrawer />
              </div>
              <div className="right" style={{ display: "flex" }}>
                <Link to="/notification">
                  <Badge
                    style={{ marginRight: 25, marginTop: 15 }}
                    badgeContent={2}
                    color="white"
                  >
                    <NotificationIcon />
                  </Badge>
                </Link>

                <Link to="/user/profile">
                  <Avatar className="center">
                    <img
                      src="../Thf_1551875131.jpg"
                      className="circle"
                      alt="avatar_img"
                    />
                  </Avatar>
                </Link>

                <Link style={{ padding: 7 }}>
                  <Settings style={{ fontSize: 32 }} />
                </Link>
              </div>
              </div>

              <Switch>
                <Route path="/dashboard" component={Board} />
                <Route path="/user/staff" component={Staff} />
                <Route path="/dashboard/profile" component={Profile} />
                <Route path="/apps/calendar" component={Calendar} />
                <Route path="/apps/utilities" component={Utilities} />
                <Redirect from="/dashboard/" to="/dashboard/board" />
                <Redirect from="/dashboard/" to="/apps/calendar" />
                <Redirect from="/dashboard/" to="/apps/utilities" />
                <Redirect from="/dashboard/" to="/user/staff" />
                <Redirect from="/dashboard/" to="/dashboard/profile" />
              </Switch>
            </div>

            <ContactSupport />
          </div>
        
      </>
    </Router>
  );
};

export default Dashboard;
