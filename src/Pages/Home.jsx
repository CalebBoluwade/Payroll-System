import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ContactSupport from "../Components/ContactSupport";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div style={{ position: "fixed", width: "100%" }}>
        <Header />
      </div>
      <div style={{ paddingTop: "77px", color: "#0a3838" }}>
        <div
          className="homedisplay"
          style={{
            backgroundImage: "url(../home/girl_3.gif)",
          }}
        >
          <h2 className="flow-text center" style={{ paddingTop: 50 }}>
            <strong>BUILT FOR EVERYONE</strong>
          </h2>
          <div>
            <div>
              <h6 className="flow-text center" style={{ paddingTop: 100 }}>
                <strong>WHY NOT LEAD THE CURVE</strong>,
                <br />
                <Button
                  variant="outlined"
                  onClick={() => {
                    navigate("register");
                  }}
                >
                  Sign Up
                </Button>
                <strong> TODAY!</strong>
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="home-slides">
        <div className="home-slide">
          <h2>
            WORK ANYWHERE.
            <div className="center">
              <strong>ANYTIME</strong>
            </div>
          </h2>
          {/* <img
            src="./home/pexels-anna-nekrashevich-68018732.jpg"
            alt="work-anywhere"
            className="slide-image"
          /> */}
          <img
            src="./home/study-work.svg"
            alt="work-anywhere"
            className="slide-image"
          />
        </div>

        <div className="home-slide">
          <h2>
            YOUR DAY-TO-DAY ANALYTICS.
            <div className="center">
              <strong>SIMPLIFIED</strong>
            </div>
          </h2>

          <img
            src="./home/pexels-lukas-669616.jpg"
            alt="work-anywhere"
            className="slide-image"
          />
        </div>

        <div>
          <h3>QUICK ONBOARDING PROCESS</h3>
          <h5>No hassle</h5>
        </div>
       
      </div>
      <ContactSupport />
      <Footer />
    </>
  );
};

export default Home;
