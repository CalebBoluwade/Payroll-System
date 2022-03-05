import React from "react";

const Receipts = () => {
  return (
    <>
      <div id="receipt-main">
        <div id="receipt-body">
          <header className="receipt-head"></header>
          <div className="receipt-amt">
            <div className="receipt-amount center">N1000.00</div>
          </div>

          <p className="center">Airtime Purchase</p>
          <div className="center" style={{ padding: "1.5em" }}>
            <img src="./alert/success.svg" width={120} alt="status" />
          </div>
          <h2 className="center">SUCCESS 😍</h2>

          {/* <div className="center" style={{ padding: "1.5em" }}>
            <img src="./alert/error.svg" width={120} alt="status" />
          </div>

          <h2 className="center">FAILED 😤</h2> */}

          {/* <div style={{ padding: "1.5em" }}>
            <span>TXN REF: XXXXXXXXX</span>
            <br />
            <br />
            <span>SERVICE: Glo Data</span>
            <br />
            <br />
            <span>DATE: 2022-02-26</span>
          </div> */}

          <p className="center" style={{ padding: "1.5em" }}>
            Powered By <img src="./vtpass2.png" width={100} alt="" />
          </p>
        </div>
      </div>
      <footer className="receipt-foot">
        <p className="center">Failed Transaction?</p>

        <p className="center">&copy; Copyright. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Receipts;
