import React from "react";

const AdminPayments = () => {
  return (
    <div>
      <h4>TOTAL EMPLOYEES</h4>

      <div className="box">
        <div className="percent">
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle cx="70" cy="70" r="70"></circle>
          </svg>
          <div className="number">
            <h2>
              87<span>%</span>
            </h2>
          </div>
        </div>
        {/* <h2 className="text">Progress</h2> */}
      </div>

      <br />

      <div className="box">
        <div className="percent">
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle cx="70" cy="70" r="70"></circle>
          </svg>
          <div className="number">
            <h2>
              87<span>%</span>
            </h2>
          </div>
        </div>
        <h2 className="text">Progress</h2>
      </div>

      <div className="right">
        <button>PAY</button>
      </div>
    </div>
  );
};

export default AdminPayments;
