import React, { useState } from "react";
import EmployeePayButton from "../Components/EmployeePayButton";
import { Delete } from "@material-ui/icons";
import AdminOTP from "../Components/AdminOTP";
import { Tooltip } from "@mui/material";

const EmployeeProfile = () => {
  const [showSalaryInput, setSalaryInput] = useState(false);
  const [NewSalary, setNewSalary] = useState("75000000");
  const [showOTP, setOTPDisplay] = useState(false);

  let lname = "Boluwade";
  let fname = "Caleb";
  let gender = "M";
  let department = "IT [Software]";
  let salary = "75,000,000";
  let currency = "NGN";

  const handleSalary = () => {
    setSalaryInput(!showSalaryInput);
  };

  const handleSalaryChanges = () => {
    // setOTPDisplay(showOTP);
  };

  return (
    <>
      <div className="view-employee">
        <p
          className="right"
          style={{
            position: "relative",
            top: -25,
            right: -15,
          }}
        >
          {gender}
        </p>
        <div className="details">
          <img
            src="../Thf_1551875131.jpg"
            className="employee-avatar"
            alt="employee-avatar"
          />
          <div>
            {lname + " " + fname}
            <br />
            {department}
          </div>
        </div>

        <div className="right sm-text" onClick={handleSalary}>
          Change Salary
        </div>
        <div>
          <div className="detail-box">
            <div className="currency">{currency}</div>
            {salary}
          </div>
        </div>

        <div className={`details ${showSalaryInput ? "" : "hide"}`}>
          <span>
            <input
              type="text"
              id="salary-input"
              onChange={(e) => setNewSalary(e.target.value)}
            />

            <button className="right" onClick={handleSalaryChanges}>
              Apply Changes
            </button>
          </span>
        </div>

        {/* <AdminOTP showOTP={showOTP} setOTPDisplay={setOTPDisplay} /> */}

        {/* <EmployeePayButton /> */}
        <Tooltip title="Remove Employee">
          <Delete
            style={{
              fontSize: 32,
              color: "red",
              position: "relative",
              bottom: -25,
              left: -15,
            }}
          />
        </Tooltip>
      </div>
    </>
  );
};

export default EmployeeProfile;
