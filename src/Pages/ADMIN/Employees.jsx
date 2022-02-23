import React, { useState, useEffect } from "react";
import { CircularProgress, Dialog } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { Outlet } from "react-router-dom";
import EmployeePayButton from "../../Components/EmployeePayButton";
import EmployeeProfile from "./EmployeeProfile";
import AdminOTP from "../../Components/AdminOTP";

const Employees = () => {
  const [openEmployee, setOpenEmployee] = useState(false);
  const [showOTP, setOTPDisplay] = useState(false);
  const [Employees, setEmployees] = useState({});
  const [testData, setTestData] = useState({});

  // //Employee Details
  // const [staffName, setStaffName] = useState("");
  // const [staffEmail, setStaffEmail] = useState("");
  // const [phoneNo, setPhoneNo] = useState("");
  // const [dept, setDept] = useState("");
  // const [jobTitle, setStaffJobTitle] = useState("");
  // const [salary, setSalary] = useState();
  // const [dateJoined, setDateJoined] = useState();
  // const [acctNo, setAcctNo] = useState("");
  // const [confirmDetails, setConfirmDetails] = useState(false);

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
