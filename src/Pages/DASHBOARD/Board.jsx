import React, { useState } from "react";
// import PeopleOutlinedRounded from "@material-ui/icons/PeopleOutlineOutlined";
import CircularProgress from "@mui/material/CircularProgress";
// import { PaymentOutlined, PersonAddOutlined } from "@material-ui/icons";
// import { Tooltip } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ArrowUpward } from "@material-ui/icons";
// import { useSelector } from "react-redux";
import BackTo from "../../Components/BackTo";
import ChartJs from "./ChartJs";

const Board = () => {
  // const isLoading = useSelector((state) => state.loadingReducer);

  const [openUtil, setCloseUtil] = useState(false);

  const [openEmployees, setOpenEmployees] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [openTransactions, setOpenTransactions] = useState(false);

  return (
    <>
      <section>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "0 0 7px 0",
          }}
        >
          <BackTo />
          <img src="./../dashboard.svg" width={30} alt="" />
          <h2>Dashboard</h2>
        </div>

        <div className="flex-center">
          <div className="display2" id="salaries">
            <h4>Total Salaries Paid</h4>
            <span className="board-numbers">$ 500,000</span>
            <div className="right">
              <ArrowUpward /> 21%
            </div>
          </div>
          <div className="display2" id="transactions">
            <h3>No. of Transactions</h3>
            <span className="board-numbers">43</span>
            <div className="right">
              <ArrowUpward /> 5%
            </div>
          </div>

          <Link to="notifications">
            <div className="display2" id="success">
              <h3>Success Rate</h3>
              <span className="board-numbers">100%</span>
              <div className="right">
                <ArrowUpward /> 15%
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="flex-center">
        <div style={{ display: "flex", flexFlow: "column" }}>
          <div id="suggestions">
            <span style={{ color: "#999" }}>SUGGESTIONS</span>
            <div className="suggestions">
              <img src="./credit-card2.svg" width={48} alt="" />
              <p>Remember to keep your details safe</p>
            </div>
            <div className="suggestions">
              <img src="./credit-card2.svg" width={48} alt="" />
              <p>Wear A Mask!</p>
            </div>
            <div className="suggestions">
              <img src="./credit-card2.svg" width={48} alt="" />
              <p>Dial *7111# Today!</p>
            </div>
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
      {/* {isLoading ? (
        <>
          <div
            className="center loading"
            style={{ alignItems: "center", margin: 30 }}
          >
            <CircularProgress />
          </div>
        </>
      ) : (
        <>
          <div id="main-board">
            <div className="display" id="display">
              <div className="s">
                <div className="m">
                  <div className="f">gng</div>
                  <div className="f">klk</div>
                </div>
                <div className="m">
                  <div className="f"></div>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="displaybox display2 z-depth-5 hoverable">
                <h6>Quick To Do's</h6>
                <div className="box" style={{ display: "flex" }}>
                  <div>
                    <Tooltip title="All Employees">
                      <PeopleOutlinedRounded
                        fontSize="large"
                        onClick={() => setOpenEmployees(!openEmployees)}
                      />
                    </Tooltip>
                  </div>
                  <Tooltip title="Add Employee">
                    <div>
                      <PersonAddOutlined
                        fontSize="large"
                        onClick={() => setOpenPopup(!openPopup)}
                      />
                    </div>
                  </Tooltip>
                  <div>
                    <Tooltip title="Recent Transactions">
                      <PaymentOutlined
                        fontSize="large"
                        onClick={() => setOpenTransactions(!openTransactions)}
                      />
                    </Tooltip>
                  </div>
                </div>

                <Dialog
                  open={openEmployees}
                  onClose={() => setOpenEmployees(!openEmployees)}
                >
                  <DialogTitle>All Employees</DialogTitle>
                  <DialogContent>
                    <Container>
                      <TextField
                        label="Search here"
                        InputProps={{ type: "search" }}
                      />
                      <SearchIcon style={{ position: "relative", right: 40 }} />
                    </Container>

                    {AllEmployees.map((employee) => (
                      <div>{employee}</div>
                    ))}
                  </DialogContent>
                </Dialog>

                <Dialog open={openPopup} onClose={() => setOpenPopup(false)}>
                  <DialogTitle>
                    <h5 className="center">
                      <PersonAddOutlined fontSize="large" /> Add New Employee
                    </h5>
                  </DialogTitle>

                  <DialogContent>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      placeholder="Full Name"
                      label="Full Name"
                      onChange={(e) => setStaffName(e.target.value)}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      placeholder="Email"
                      label="Email Address"
                      name="email"
                      onChange={(e) => setStaffEmail(e.target.value)}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      placeholder="Job Title"
                      label="Job Title"
                      onChange={(e) => setStaffJobTitle(e.target.value)}
                    />
                    <Grid container>
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
                          id="dept"
                          label="Department"
                          onChange={(e) => setDept(e.target.value)}
                        />
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item sm>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          label="Total Salary"
                          type="number"
                          onChange={(e) => setSalary(e.target.value)}
                        />
                      </Grid>
                      <Grid item sm>
                        Date Joined
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          label=""
                          type="date"
                          onChange={(e) => setDateJoined(e.target.value)}
                        />
                      </Grid>
                    </Grid>

                    <Button onClick={submitEmployee}>Add Employee</Button>

                    <Dialog
                      open={confirmDetails}
                      onClose={() => setConfirmDetails(!confirmDetails)}
                    >
                      <DialogTitle className="center">
                        Confirm Details
                      </DialogTitle>
                      <DialogContent>
                        <strong style={{ fontSize: 18 }}>
                          <p>Full Name: {staffName}</p>
                          <p>Email Address: {staffEmail}</p>
                          <p>Phone Number: {phoneNo}</p>
                          <p>Job Title: {jobTitle}</p>
                          <p>Department: {dept}</p>
                          <p>Salary: {salary}</p>
                          <p>Date Joined: {dateJoined}</p>
                        </strong>

                        <Button className="right">Proceed</Button>
                      </DialogContent>
                    </Dialog>
                  </DialogContent>
                </Dialog>

                <Dialog
                  open={openTransactions}
                  onClose={() => setOpenTransactions(!openTransactions)}
                >
                  <DialogTitle>Recent Transactions</DialogTitle>
                  <DialogContent></DialogContent>
                </Dialog>
              </div>

              <div className="displaybox display2 z-depth-3">
                {/* <span className="left" style={{ marginTop: "20%" }}>
      <ArrowBackIos />
    </span> 

                <div className="progress1">
                  <div className="fill">
                    <h2 id="percent">{percent}</h2>
                    <div className="center">Employees</div>
                  </div>
                </div>

                 <span className="right" style={{ marginTop: "20%" }}>
      <ArrowForwardIos />
    </span> 
              </div>

              <div className="displaybox display2 z-depth-5">
                <img src="./PngItem_1985099.png" width="100" alt="" />

                <p>AcctNo: XXXXXXXXXX</p>
                <p>Connect To Bank</p>
                <p> Payment Coming Soon</p>
                <p>Payment Integrations with Paystack, FlutterWave, BUYBills</p>
              </div>

               <div className="displaybox display2 z-depth-5 hoverable">
    <div className="center" style={{ fontSize: 28, fontWeight: 400 }}>
      <strong>
        <em> At a Glance</em>
      </strong>
    </div>


   
  </div>
            </div>
            <div
              className="displaybox display2 z-depth-5 hoverable"
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img src="./PngItem_1985099.png" width="100" alt="" />
              <CardContent>Mobile Apps Coming Soon</CardContent>
            </div>
          </div>
        </>
      )} */}
    </>
  );
};

export default Board;
