import { InfoOutlined } from "@material-ui/icons";
import { Tooltip } from "@mui/material";
import React from "react";

const Employees = () => {
  const AllEmployees = [
    "Ali Benson",
    "Samson Stevens",
    "Giwa Michael",
    "Ronke Precious",
    "Peter Griffon",
    "John Doe",
    "Mary Jane",
  ];

  const percent = AllEmployees.length;

  return (
    <>
      <div className="displaybox">
        <div className="employee">
          <table>
            <th style={{ width: 50 }}>S/N</th>
            <th style={{ width: 50 }}>Select</th>
            <th>Name</th>
            <th>Status</th>
            <th>
              BVN Verified{" "}
              <Tooltip title="This Is Used To Verify That Such Employee is Not A Fake">
                <InfoOutlined />
              </Tooltip>
            </th>
            <th>View Details</th>
          </table>
        </div>
      </div>
    </>
  );
};

export default Employees;
