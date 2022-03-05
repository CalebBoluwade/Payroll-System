import React, { useState, useEffect } from "react";
import { Dialog } from "@material-ui/core";
// import { MoreVert } from "@material-ui/icons";
// import { Outlet } from "react-router-dom";
import { PaymentOutlined, PersonAddOutlined } from "@material-ui/icons";
import { Tooltip } from "@material-ui/core";
import PeopleOutlinedRounded from "@material-ui/icons/PeopleOutlineOutlined";
import CircularProgress from "@mui/material/CircularProgress";
// import EmployeePayButton from "../../Components/EmployeePayButton";
import EmployeeProfile from "./EmployeeProfile";
// import AdminOTP from "../../Components/AdminOTP";

const Employees = () => {
  const [openEmployee, setOpenEmployee] = useState(false);
  const [showOTP, setOTPDisplay] = useState(false);
  const [Employees, setEmployees] = useState({});
  const [testData, setTestData] = useState({});

  const [openEmployees, setOpenEmployees] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [openTransactions, setOpenTransactions] = useState(false);

  //Employee Details
  const [staffName, setStaffName] = useState("");
  const [staffEmail, setStaffEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [dept, setDept] = useState("");
  const [jobTitle, setStaffJobTitle] = useState("");
  const [salary, setSalary] = useState();
  const [dateJoined, setDateJoined] = useState();
  const [acctNo, setAcctNo] = useState("");
  const [confirmDetails, setConfirmDetails] = useState(false);

  // const submitEmployee = (e) => {
  //   e.preventDefault();

  //   const employeeDetails = {
  //     staffName: staffName,
  //     staffEmail: staffEmail,
  //     phoneNumber: phoneNo,
  //     Department: dept,
  //     jobTitle: jobTitle,
  //     salary: salary,
  //     dateJoined: "Joined " + dateJoined,
  //   };

  //   console.log(employeeDetails);
  //   setConfirmDetails(true);
  // };

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const res = await fetch("https://randomuser.me/api/?results=15", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setEmployees(data.results);
        return JSON.stringify(data);
      } catch (e) {
        console.log(e);
      }
    };
    // getEmployees();
  }, []);

  console.log(testData);

  for (let i = 0; i < Employees.length; i++) {}

  return (
    <>
      {/* <div className="box">
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
                <DialogTitle className="center">Confirm Details</DialogTitle>
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
      </div> */}

      <div id="employee">
        <button onClick={() => setOpenEmployee(!openEmployee)}></button>

        <div className="employee-grid">
          <div
            className="employee-card"
            onClick={() => setOpenEmployee(!openEmployee)}
          >
            <img
              src="../Avatars/1.jpg"
              alt="employee-avatar"
              className="employee-avatar"
            />
          </div>

          <div
            className="employee-card"
            onClick={() => setOpenEmployee(!openEmployee)}
          >
            <img
              src="../Avatars/1.jpg"
              alt="employee-avatar"
              className="employee-avatar"
            />
          </div>

          <div
            className="employee-card"
            onClick={() => setOpenEmployee(!openEmployee)}
          >
            <img
              src="../Avatars/1.jpg"
              alt="employee-avatar"
              className="employee-avatar"
            />
          </div>

          <div
            className="employee-card"
            onClick={() => setOpenEmployee(!openEmployee)}
          >
            <img
              src="../Avatars/1.jpg"
              alt="employee-avatar"
              className="employee-avatar"
            />
          </div>
        </div>
        {/* 
          {console.log(testData)}
          {testData.length > 0 ? (
            testData.map((employee, index) => (
              <div
                className="employee-card"
                key={employee.id}
                onClick={() => setEmployee(!openEmployee)}
              >
                <img
                  src={testData[0].picture.large}
                  alt="employee-avatar"
                  className="employee-avatar"
                />
                <EmployeePayButton />
                <span>
                  <MoreVert />
                </span>
                <Dialog
                  open={openEmployee}
                  onClose={() => setEmployee(!openEmployee)}
                >
                  <input
                    type="text"
                    disabled
                    value={testData[0].name.last + " " + testData[0].name.first}
                  />
                  <input type="text" disabled value={testData[0].gender} />
                </Dialog>
              </div>
            ))
          ) : (
            <></>
          )}
        </div> */}
        <EmployeeProfile
          openEmployee={openEmployee}
          setOpenEmployee={setOpenEmployee}
        />
      </div>

      {/* <div className="employee-card">
        <img src="../Thf_1551875131.jpg" alt="" className="employee-avatar" />
        <span>BOLUWADE CALEB</span>
        <span className="employee-dept">IT [Software]</span>

        <span onClick={() => setOTPDisplay(!showOTP)}>
          <MoreVert />
        </span>

        <AdminOTP showOTP={showOTP} setOTPDisplay={setOTPDisplay} />
      </div> */}
    </>
  );
};

export default Employees;
