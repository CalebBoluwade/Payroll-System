import React, {useState, useEffect} from 'react';
import { CircularProgress, Dialog } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { Outlet } from "react-router-dom";
import EmployeePayButton from '../Components/EmployeePayButton';

const Employees = () => {
    const [openEmployee, setEmployee] = useState(false);
    const [Employees, setEmployees] = useState({});

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
        getEmployees();
      }, []);
    
      for (let i = 0; i < Employees.length; i++) {}

  return <>
  div
   <div className="employee-grid">
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
                          value={
                            Employees[0].name.last +
                            " " +
                            Employees[0].name.first
                          }
                        />
                        <input
                          type="text"
                          disabled
                          value={Employees[0].gender}
                        />
                      </Dialog>
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>

              <div className="employee-details">
              <EmployeePayButton />
              </div>
            
            <div className="employee-card">
              <img
                src="../Thf_1551875131.jpg"
                alt=""
                className="employee-avatar"
              />
              <span>BOLUWADE CALEB</span>
              <span className="employee-dept">IT [Software]</span>
              
              <span>
                <MoreVert />
              </span>
            </div>
  </>;
};

export default Employees;
