import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ContactSupport from "../Components/ContactSupport";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div style={{ paddingTop: "77px" }}>
        <figure>
          <img
            src="./home/pexels-anna-nekrashevich-6801873.jpg"
            alt="work-anywhere"
            className="slide-image"
          />
          <figcaption>A Guy Working</figcaption>
        </figure>
      </div>

      {/* <div className="home-slides">
        <div className="home-slide">
          <h2>
            WORK ANYWHERE.
            <div className="center">
              <strong>ANYTIME</strong>
            </div>
          </h2>
          <img
            src="./home/pexels-anna-nekrashevich-68018732.jpg"
            alt="work-anywhere"
            className="slide-image"
          />
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
       
      </div> */}

      <div className="testimonals">
        <div className="bubble right">
          <span
            className="testimonals-w-text"
            style={{ position: "relative", bottom: 0, right: 180 }}
          >
            <img
              src="./Thf_1551875131.jpg"
              className="testimonal-avatar"
              alt=""
            />
            <span className="testimonal-text">
              "Lorem ipsum dolor sit amet consectetur adipisicing."
            </span>
          </span>
        </div>
        <br />
        <br />
        <br />

        <div className="bubble2" style={{ position: "relative", top: 65 }}>
          <span
            className="testimonals-w-text"
            style={{ position: "relative", top: 35, left: -15 }}
          >
            <img
              src="./Thf_1551875131.jpg"
              className="testimonal-avatar"
              alt=""
            />
            <span className="testimonal-text">
              "Lorem ipsum dolor sit amet consectetur adipisicing."
            </span>
          </span>
        </div>
        <br />
        <br />
        <br />

        <div className="bubble3">
          <span
            className="testimonals-w-text"
            style={{ position: "relative", left: -25 }}
          >
            <img
              src="./Thf_1551875131.jpg"
              className="testimonal-avatar"
              alt=""
            />
            <span className="testimonal-text">
              "Lorem ipsum dolor sit amet consectetur adipisicing."
            </span>
          </span>
        </div>
        {/* <div className="testimonals-w-text">
          <div className="bubble4"></div>
        </div>
        <div className="testimonals-w-text">
          <div className="bubble5"></div>
        </div> */}
      </div>

      <div
        className="homedisplay"
        style={{
          backgroundImage: "url(./home/girl_3.gif)",
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

      <ContactSupport />
      <Footer />
    </>
  );
};

export default Home;
