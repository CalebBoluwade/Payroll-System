import React from "react";

const AdminPayments = () => {
  return (
    <div>
      <h4>TOTAL EMPLOYEES</h4>

      <h3>Available Balance</h3>
      <p className="amount">NGN5,000,000,000</p>

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

      <button>Import Excel File</button>

      <div className="right">
        <button>PAY</button>
      </div>
    </div>
  );
};

export default AdminPayments;
