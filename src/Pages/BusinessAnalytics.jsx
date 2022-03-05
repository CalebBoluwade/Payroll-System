import React, { useState } from "react";

const BusinessAnalytics = () => {
  const [employeeCount, setEmployeeCount] = useState();
  const [employeeSalary, setEmployeeSalary] = useState();
  const [loadingAnaltyics, setLoadingAnalytics] = useState(true);

  const validateInput = (e) => {
    if (e.target.value == undefined) console.log("empty");
  };

  const salaryScale = employeeCount * employeeSalary;
  return (
    <>
      {loadingAnaltyics ? (
        <>
          <div className="preloader">
            <div className="load">
              <img src="../analytics.svg" className="img" alt="" />
            </div>
            <div className="center">
              <span className="center">Business Model Analytics</span>
              <span className="center">v1.0</span>
              <span className="center">Please Wait...Setting Up..</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div id="business">
            <h2>YOUR BUSINESS MODEL</h2>

            <input
              type="number"
              name=""
              id=""
              min={1}
              onChange={(e) => setEmployeeCount(e.target.value)}
            />

            <input
              type="text"
              name=""
              id=""
              onC
              onChange={(e) => validateInput(e)}
            />
          </div>
        </>
      )}
    </>
  );
};
export default BusinessAnalytics;
