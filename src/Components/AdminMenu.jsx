import React from "react";
import { Search } from "@material-ui/icons";
import { Link } from "react-router-dom";

const AdminMenu = ({ openSideView }) => {
  // const current_link = document.getElementsByTagName("a.side-links");

  // const [showAbout, setShowAbout] = useState(false);
  return (
    <>
      <div className={` adminMenu ${openSideView ? "hide" : ""}`}>
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
          <Link className="side-links" to="prefrences">
            PREFRENCES
          </Link>
          <Link className="side-links" to="feedback">
            FEEDBACK
          </Link>
        </div>

        <p
          className="center sm-text"
          style={{ position: "relative", bottom: "0px" }}
        >
          <Link to="help">Need Help</Link>
        </p>
        <p id="app-version">Version 1.0.0</p>
      </div>
    </>
  );
};

export default AdminMenu;
