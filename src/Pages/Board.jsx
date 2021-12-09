import React, {useState} from "react";
import PeopleOutlinedRounded from "@material-ui/icons/PeopleOutlineOutlined";
import LocalHospital from "@material-ui/icons/LocalHospitalOutlined";
import Bank from "@material-ui/icons/AccountBalance";
import CircularProgress from "@mui/material/CircularProgress";
import { ArrowBackIos, ArrowForwardIos, PaymentOutlined, PersonAdd, PersonAddOutlined, Print } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";
import { Tooltip } from "@material-ui/core";
import AddEmployee from "../Components/AddEmployee";
import Select from "@material-ui/core/Select";

import { TextField, Grid, Menu, MenuItem, Container } from '@material-ui/core';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";


const Board = () => {
  const page = true;
  const percent = 15;

  const [userEmail, setUserEmail] = useState();
    const [openPopup, setOpenPopup] = useState(false);
    const [phoneNo, setPhoneNo] = useState();
    const [Dept, setDept] = useState();


  const [employeeToggle] = useState(false);

  return (
    <div>
      {page ? (
        <>
          <div className="box">
            <div className="displaybox display z-depth-5 hoverable">
              <div>
                <div style={{ fontSize: 23, fontWeight: 300 }}>
                  Welcome Back {" "}
                  <strong>
                   <span id="user">caleb</span>
                  </strong>
                </div>
               
                <div style={{ fontSize: 14, fontWeight: 400 }}>
                  <strong>
                    <em>Have a Great and Productive Day</em>
                  </strong>
                </div>
                <span>
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nemo repellendus, nisi temporibus architecto soluta fugit dicta iusto consectetur quo. Officiis magni voluptates sunt rerum!
                </span>
                {/* <Link style={{ position: "relative", bottom: -50 }}>
                  <Typography>AcctNo: XXXXXXXXXX</Typography>
                  <Typography>Connect To Bank</Typography>
                </Link> */}
<br />
<div style={{width: "20%", margin: "auto"}}>
                <div className="slides">
                  <div className="slide"></div>
                  <div className="slide"></div>
                </div>
                </div>
              </div>

              <div>
                <img
                  src="../dg.png"
                  alt="board img"
                  style={{ width: 100, height: 100, borderRadius: "50%" }}
                />
              </div>
            </div>

            <div className="displaybox display2 hoveranim z-depth-5 hoverable">
            <div className="box" style={{display: "flex"}}>
              <aside>
              {/* <span style={{fontSize: 32, position: "relative", }}>%</span> */}
              <div className="bubble">%</div>
              <div className="bubble2"></div>
              <div className="bubble3"></div>
              </aside>
<aside>
  <h3>WHY CHOSE US</h3>
</aside>
              </div>
              <div style={{display: "flex", justifyContent: "space-evenly"}}>
<Link>
                <span>Products</span></Link>
                <Link><span>Privacy</span></Link>
                <Link><span>Learn More</span></Link>
              </div>
            </div>

            <div className="displaybox display2 z-depth-5 hoverable">
            <h6>Quick To Do's</h6>
            <div className="box" style={{display: "flex"}}>
        
              <div>
                <Tooltip title="All Employees">
                <PeopleOutlinedRounded fontSize="large" />
                </Tooltip>
              </div>
              <Tooltip title="Add Employee">
              <div>
                <PersonAddOutlined fontSize="large" onClick={() => setOpenPopup(!openPopup)} />
                {console.log(employeeToggle)}
              </div>
              </Tooltip>
              <div>
                <Tooltip title="Recent Transactions">
                <PaymentOutlined  fontSize="large" />
                </Tooltip>
              </div>
            </div>

            <div>
              <Dialog open={openPopup} onClose={() => setOpenPopup(false)}>
        
            <DialogTitle>
            <div id="addemployeeform">
        <PersonAddOutlined fontSize="large" />
        </div>
        </DialogTitle>

<DialogContent>
        <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                placeholder="Email"
                label="Email Address"
                name="email"
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <Grid container>
          <Grid style={{ padding: 25 }} item xs={5}>
            <Select
              fullWidth
              name="country"
              label="Select Your Country"
              onChange={(e) => setDept(e.target.value)}
            >
              <MenuItem>NG (+234)</MenuItem>
              <MenuItem>USA</MenuItem>
              <MenuItem>UK</MenuItem>
              <MenuItem>Canada</MenuItem>
            </Select>
          </Grid>
          <Grid item sm>
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="phone"
              label="Phone No."
              name="phone"
              type="tel"
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </Grid>
          <Grid item sm>
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="phone"
              label=""
              name="phone"
              type="tel"
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </Grid>
        </Grid>
        
              </DialogContent>
        
        </Dialog>
            </div>


            </div>

            {/* <div className="displaybox display2 z-depth-5 hoverable">
              <div className="center" style={{ fontSize: 28, fontWeight: 400 }}>
                <strong>
                  <em> At a Glance</em>
                </strong>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span className="left" style={{ marginTop: "20%" }}>
                  <ArrowBackIos />
                </span>

                <div className="progress1">
                  <div className="fill">
                    <h2 id="percent">{percent}%</h2>
                    <div className="center">HMO</div>
                  </div>
                </div>

                <span className="right" style={{ marginTop: "20%" }}>
                  <ArrowForwardIos />
                </span>
              </div>
            </div> */}
          </div>
          {/* <div className="box1">
            <h4>Expenses</h4>
          </div> */}

          <div className="box">
            <div className="displaybox display3 z-depth-5 hoverable">
              <div
                className="hprogressbar"
                style={{ width: "30%", background: "goldenrod" }}
              >
                <span>30%</span>
              </div>
              <div
                className="hprogressbar"
                style={{ width: "45%", background: "navy" }}
              >
                <span>45%</span>
              </div>
              <div
                className="hprogressbar"
                style={{ width: "70%", background: "teal" }}
              >
                <span>70%</span>
              </div>
              <div
                className="hprogressbar"
                style={{ width: "90%", background: "black" }}
              >
                <span>90%</span>
              </div>
            </div>

            <div className="displaybox display5 z-depth-5 hoverable status">
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 40,
                  padding: 15,
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <strong>
                  <em>Overview</em>
                </strong>
                <span
                  className="z-depth-1"
                  style={{ padding: "3px 15px" }}
                  onClick={() => window.print()}
                >
                  <Print />
                </span>
              </div>

              <div className="status-content">
                <span>
                  <PeopleOutlinedRounded />
                  Staff Payments
                </span>

                <Alert severity="success"></Alert>
              </div>

              <div className="status-content">
                <span>
                  <PeopleOutlinedRounded />
                  Taxes
                </span>

                <Alert severity="warning"></Alert>
              </div>

              <div className="status-content">
                <span>
                  <LocalHospital />
                  HMO
                </span>

                <Alert severity="error"></Alert>
              </div>

              <div className="status-content">
                <span>
                  <PeopleOutlinedRounded />
                  Staff Payments
                </span>

                <Alert severity="success"></Alert>
              </div>
              <div className="status-content">
                <span>
                  <Bank />
                  Loans
                </span>

                <Alert severity="success"></Alert>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="center loading" style={{ alignItems: "center" }}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default Board;
