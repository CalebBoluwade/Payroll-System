import React, { useState } from "react";
import PeopleOutlinedRounded from "@material-ui/icons/PeopleOutlineOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import { PaymentOutlined, PersonAddOutlined } from "@material-ui/icons";
import { Tooltip } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Container from "@material-ui/core/Container";
import { TextField, Grid } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { useSelector } from "react-redux";
import { Button, CardContent } from "@mui/material";

const Board = () => {
  const isLoading = useSelector((state) => state.loadingReducer);
  // const dispatch = useDispatch();

  const [openUtil, setCloseUtil] = useState(false);

  const AllEmployees = [
    "Ali Benson",
    "Samson Stevens",
    "Giwa Michael",
    "Ronke Precious",
    "Peter Griffon",
    "John Doe",
    "Mary Jane",
  ];

  const companyX = {
    users: [
      {
        company_id: 1,
        avatar_img: "https://i.pravatar.cc/150?img=39",
        companyName: "New Wave Solutions",
        email: "johndoe@newwave.com",
        rcc: "",
        tax: "",
        Phone: "+234xxxxxxxx",
        password: "test12345",
        Departments: [
          {
            frontdesk: [
              {
                employee_id: 1,
                staffName: "Jide Makanaki",
                staffEmail: "jide@example.com",
                phoneNumber: "08012345678",
                Department: "marketing",
                jobTitle: "Head marketer",
                salary: 176000,
                dateJoined: "Joined 2021-11-2",
              },
              {
                employee_id: 2,
                staffName: "Sarah Mbah",
                staffEmail: "sarah@example.com",
                phoneNumber: "08012345678",
                Department: "marketing",
                jobTitle: "Head marketer",
                salary: 176000,
                dateJoined: "Joined 2021-11-2",
              },
            ],
            marketing: [
              {
                employee_id: 1,
                staffName: "Dennis Baker",
                staffEmail: "jide@example.com",
                phoneNumber: "08012345678",
                Department: "marketing",
                jobTitle: "Head marketer",
                salary: 176000,
                dateJoined: "Joined 2021-11-2",
              },
              {
                employee_id: 2,
                staffName: "Mitchell David",
                staffEmail: "davids@example.com",
                phoneNumber: "08012345678",
                Department: "marketing",
                jobTitle: "marketer",
                salary: 176000,
                dateJoined: "Joined 2021-11-2",
              },
            ],
          },
        ],
      },
    ],
  };

  const percent = AllEmployees.length;

  //Employee Details
  const [staffName, setStaffName] = useState("");
  const [staffEmail, setStaffEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [dept, setDept] = useState("");
  const [jobTitle, setStaffJobTitle] = useState("");
  const [salary, setSalary] = useState();
  const [dateJoined, setDateJoined] = useState();
  const [acctNo, setAcctNo] = useState("");

  const [openEmployees, setOpenEmployees] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [openTransactions, setOpenTransactions] = useState(false);

  const [confirmDetails, setConfirmDetails] = useState(false);

  const submitEmployee = (e) => {
    e.preventDefault();

    const employeeDetails = {
      staffName: staffName,
      staffEmail: staffEmail,
      phoneNumber: phoneNo,
      Department: dept,
      jobTitle: jobTitle,
      salary: salary,
      dateJoined: "Joined " + dateJoined,
    };

    console.log(employeeDetails);
    setConfirmDetails(true);

    console.log(companyX);
  };

  return (
    <div>
      {isLoading ? (
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
    </span> */}

                <div className="progress1">
                  <div className="fill">
                    <h2 id="percent">{percent}</h2>
                    <div className="center">Employees</div>
                  </div>
                </div>

                {/* <span className="right" style={{ marginTop: "20%" }}>
      <ArrowForwardIos />
    </span> */}
              </div>

              <div className="displaybox display2 z-depth-5">
                <img src="./PngItem_1985099.png" width="100" alt="" />

                <p>AcctNo: XXXXXXXXXX</p>
                <p>Connect To Bank</p>
                <p> Payment Coming Soon</p>
                <p>Payment Integrations with Paystack, FlutterWave, BUYBills</p>
              </div>

              {/* <div className="displaybox display2 z-depth-5 hoverable">
    <div className="center" style={{ fontSize: 28, fontWeight: 400 }}>
      <strong>
        <em> At a Glance</em>
      </strong>
    </div>


   
  </div> */}
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
      )}
    </div>
  );
};

export default Board;
