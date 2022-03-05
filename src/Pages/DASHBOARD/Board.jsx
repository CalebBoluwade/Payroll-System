import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ArrowUpward } from "@material-ui/icons";
// import { useSelector } from "react-redux";
import BackTo from "../../Components/BackTo";
// import ChartJs from "./ChartJs";

const Board = () => {
  const nav = useNavigate();
  // const isLoading = useSelector((state) => state.loadingReducer);

  return (
    <>
      <section>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "0 0 7px 0",
          }}
        >
          <BackTo />
          <img src="./../dashboard.svg" width={30} alt="" />
          <h2>Dashboard</h2>
        </div>

        <div className="flex-center">
          <div className="display2" id="salaries" onClick={() => nav("chart1")}>
            <h4>Total Salaries Paid</h4>
            <span className="board-numbers">$ 500,000</span>
            <div className="right">
              <ArrowUpward /> 21%
            </div>
          </div>
          <div
            className="display2"
            id="transactions"
            onClick={() => nav("chart2")}
          >
            <h3>No. of Transactions</h3>
            <span className="board-numbers">43</span>
            <div className="right">
              <ArrowUpward /> 5%
            </div>
          </div>

          <div className="display2" id="success" onClick={() => nav("chart3")}>
            <h3>Success Rate</h3>
            <span className="board-numbers">100%</span>
            <div className="right">
              <ArrowUpward /> 15%
            </div>
          </div>
        </div>
      </section>

      <section className="flex-center">
        <div id="chart">
          <Outlet />
        </div>

        <div id="suggestions">
          <span style={{ color: "#999" }}>SUGGESTIONS</span>
          <div className="suggestions">
            <img src="../credit-card2.svg" width={48} alt="" />
            <p>Remember to keep your details safe</p>
          </div>
          <div className="suggestions">
            <img src="../credit-card2.svg" width={48} alt="" />
            <p>Wear A Mask!</p>
          </div>
          <div className="suggestions">
            <img src="../credit-card2.svg" width={48} alt="" />
            <p>Dial *7111# Today!</p>
          </div>
        </div>
      </section>

      {/* <section >
       
         

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
            {/* <h2 className="text">Progress</h2> 
          </div>
        </div>
      </section> */}
      {/* {isLoading ? (
        <>
          <div
            className="center loading"
            style={{ alignItems: "center", margin: 30 }}
          >
            <CircularProgress />
          </div>
        </>
      ) : (
        <>
          <div id="main-board">
            <div className="display" id="display">
              <div className="s">
                <div className="m">
                  <div className="f">gng</div>
                  <div className="f">klk</div>
                </div>
                <div className="m">
                  <div className="f"></div>
                </div>
              </div>
            </div>

           
              <div className="displaybox display2 z-depth-3">
                {/* <span className="left" style={{ marginTop: "20%" }}>
      <ArrowBackIos />
    </span> 

                <div className="progress1">
                  <div className="fill">
                    <h2 id="percent">{percent}</h2>
                    <div className="center">Employees</div>
                  </div>
                </div>

                 <span className="right" style={{ marginTop: "20%" }}>
      <ArrowForwardIos />
    </span> 
              </div>

              <div className="displaybox display2 z-depth-5">
                <img src="./PngItem_1985099.png" width="100" alt="" />

                <p>AcctNo: XXXXXXXXXX</p>
                <p>Connect To Bank</p>
                <p> Payment Coming Soon</p>
                <p>Payment Integrations with Paystack, FlutterWave, BUYBills</p>
              </div>

               <div className="displaybox display2 z-depth-5 hoverable">
    <div className="center" style={{ fontSize: 28, fontWeight: 400 }}>
      <strong>
        <em> At a Glance</em>
      </strong>
    </div>


   
  </div>
            </div>
            <div
              className="displaybox display2 z-depth-5 hoverable"
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img src="./PngItem_1985099.png" width="100" alt="" />
              <CardContent>Mobile Apps Coming Soon</CardContent>
            </div>
          </div>
        </>
      )} */}
    </>
  );
};

export default Board;
