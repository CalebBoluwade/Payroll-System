import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ContactSupport from "../Components/ContactSupport";

const Home = () => {
  return (
    <>
      <Header />

      <div
        style={{
          backgroundImage: "url(./bg.jpg)",
          width: "100%",
          padding: 20,
        }}
      ></div>

      <div
        className="salaryPlans"
        style={{
          backgroundImage: "url(./girl_3.gif)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h2 className="flow-text center" style={{ paddingTop: 50 }}>
          <strong>Built For Everyone</strong>
        </h2>
        <div>
          <div className="card z-depth-4 basicSalaryPlan hoverable">
            <span style={{ color: "navy" }}>
              <h5 className="flow-text">
                <strong>Basic Plan</strong>
              </h5>
            </span>
            <br />
            <span>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </span>
          </div>

          <div className="card z-depth-4 midSalaryPlan hoverable">
            <span style={{ color: "grey" }}>
              <h5 className="flow-text card-title">
                <strong>Mid Plan</strong>
              </h5>
            </span>
            <br />
            <span>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </span>
          </div>

          <div className="card z-depth-4 goldSalaryPlan hoverable">
            <span style={{ color: "goldenrod" }}>
              <h5 className="flow-text card-title">
                <strong>Gold Plan</strong>
              </h5>
            </span>
            <br />
            <span>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </span>
          </div>
        </div>
      </div>

      <ContactSupport />

      {/* <div style={{ paddingTop: 50 }}>
        <h4 className="center">What We Offer...</h4>
        <div
          style={{
            width: "80%",
            display: "flex",
            margin: "0px auto",
            justifyContent: "space-evenly",
          }}
        >
          <div className="card" style={{ width: 100, padding: 15 }}>
            <TimerRoundedIcon style={{ color: "lightskyblue", fontSize: 40 }} />
            <br />
            24/7 Support
          </div>

          <div className="card" style={{ width: 100, padding: 15 }}>
            <AssessmentIcon style={{ color: "navy", fontSize: 40 }} />
            <br />
            Analytics
          </div>

          <div className="card" style={{ width: 100, padding: 15 }}>
            <SpeedIcon style={{ color: "teal", fontSize: 40 }} />
            <i className="material-icons">account</i>
            <br />
            Speed & Accuracy
          </div>

          <div className="card" style={{ width: 100, padding: 15 }}>
            <SecurityIcon style={{ color: "navy", fontSize: 40 }} />
            <br />
            Security
          </div>

          <div className="card" style={{ width: 100, padding: 15 }}>
            <SupervisorAccountIcon style={{ color: "navy", fontSize: 40 }} />
            <br />
            Team Work
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default Home;
