import React, { useState } from "react";
import { Search } from "@material-ui/icons";
import { Link } from "react-router-dom";

const AdminSidebar = ({ openSideView }) => {
  return (
    <>
      <div className={` admin-sidebar ${openSideView ? "hide" : ""}`}>
        <input type="search" name="" id="search" placeholder="Search Here" />

        <Link to="search" className="search-icon">
          <Search />
        </Link>

        <div className="admin-links">
          <Link className="side-links" to="departments">
            DEPARTMENTS
          </Link>
          <Link className="side-links" to="employee">
            EMPLOYEES
          </Link>
          <Link className="side-links" to="transactions">
            TRANS. HISTORY
          </Link>
          <Link className="side-links" to="payments">
            PAYMENTS
          </Link>
          <Link className="side-links" to="notifications">
            PUSH NOTIFICATIONS
          </Link>
          <Link className="side-links" to="feedback">
            FEEDBACK
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
