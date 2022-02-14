import React, { useState } from "react";
import EmployeePayButton from "../../Components/EmployeePayButton";
import { Delete } from "@material-ui/icons";
import AdminOTP from "../../Components/AdminOTP";
import { Tooltip } from "@mui/material";

const EmployeeProfile = () => {
  const [showSalaryInput, setSalaryInput] = useState(false);
  const [NewSalary, setNewSalary] = useState("75000000");
  const [showOTP, setOTPDisplay] = useState(false);

  let lname = "Boluwade";
  let fname = "Caleb";
  let gender = "M";
  let department = "IT [Software]";
  let salary = "75,000,000.00";
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
            fontSize: 18,
            position: "relative",
            top: -12,
            right: -16,
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
          CHANGE SALARY
        </div>
        <div>
          <div className="detail-box">
            <div className="currency">{currency}</div>
            {salary}
          </div>
        </div>

        <p>New Salary</p>
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
            <Tooltip title="Remove Employee">
              <Delete
                style={{
                  fontSize: 32,
                  color: "red",
                  position: "relative",
                  right: 0,
                }}
              />
            </Tooltip>
          </span>
        </div>

        {/* <AdminOTP showOTP={showOTP} setOTPDisplay={setOTPDisplay} /> */}

        {/* <EmployeePayButton /> */}
      </div>
    </>
  );
};

export default EmployeeProfile;
