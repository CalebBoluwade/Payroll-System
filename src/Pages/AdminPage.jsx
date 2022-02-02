import { MoreVert, Menu, ArrowForwardIos } from "@material-ui/icons";
import { Dialog } from "@mui/material";
import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import { useSelector } from "react-redux";
import { useNavigate, useRoutes, Switch } from "react-router-dom";

const AdminPage = () => {
  const [openEmployee, setEmployee] = useState(false);
  const [openSideView, setSideView] = useState(true);
  const [Employees, setEmployees] = useState({});
  const isUserAuth = useSelector((state) => state.authReducer);

  const navigate = useNavigate();

  useEffect(() => {
      if (!isUserAuth) {
        navigate("auth");
      }

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
    getEmployees();
  }, [isUserAuth]);

  for (let i = 0; i < Employees.length; i++) {}

  return (
    <>
      <div className="main" style={{ background: "#fff" }}>
        {/* <Sidebar /> */}
        <div id="admin-board">
          <div className={` admin-sidebar ${openSideView ? "hide" : ""}`} >
            <ul>
              <li>DEPARTMENTS</li>
              <li>TRANSACTION HISTORY
                <ArrowForwardIos style={{
          fontSize: 20,
        }}/>
              </li>
            </ul>
          </div>
          <div className="admin-main">
            <div className="admin-topbar">
            <Menu
        onClick={() => setSideView(!openSideView)}
        style={{
          fontSize: 35,
        }}
      />
      <span className="right">
        <input type="search" name="" id="" />
      </span>
            </div>
          <div className="employee-grid">
            
            {console.log(Employees)}
            {Employees.length > 0 ? (
              Employees.map((employee) => (
                <div
                  className="employee-card"
                  key={employee.id}
                  onClick={() => setEmployee(!openEmployee)}
                >
                  <img
                    src={Employees[0].picture.large}
                    alt="employee-avatar"
                    className="employee-avatar"
                  />
                  <span>
                    <MoreVert />
                  </span>
                  <Dialog
                    open={openEmployee}
                    onClose={() => setEmployee(!openEmployee)}
                  >
                    <input type="text" disabled value={Employees[0].name.last + " " + Employees[0].name.first}/>
<br />
                    <input type="text" disabled value={Employees[0].gender}/>
                    
                  </Dialog>
                </div>
              ))
            ) : (
              <></>
            )}
            </div>

            {/* <div className="employee-card">
              <img
                src="./Thf_1551875131.jpg"
                alt=""
                className="employee-avatar"
              />
              <span>BOLUWADE CALEB</span>
              <span className="employee-dept">IT [Software]</span>
              <span>
                <MoreVert />
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
